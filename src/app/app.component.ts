import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './services/global.service';
import { Globals } from './globals';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  oneSignalAppId = null;
  fireBaseKey = null;
  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar,
    private global: GlobalService, private g: Globals, private router: Router, private api: ApiService, private navCtrl: NavController) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.getFlags();
    this.oneSignalAppId = this.global.getAppConfigFlag("ONE_SIGNAL_APP_ID");
    this.fireBaseKey = this.global.getAppConfigFlag("FIREBASE_KEY");
    await this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.global.isApp) {
        this.setupPush();
      }
    });
    await this.global.verificarVersion();

  }

  async ngOnInit() {
    await this.global.getCredentials();
  }

  async getFlags() {
    await this.api.getFlags().toPromise().then((res: any) => {
      this.global.flags = res.data;
    }).catch(error => {

    });
  }

  setupPush() {
    console.log('Plugins', window["plugins"]);
    let self = this;
    var notificationOpenedCallback = function (jsonData) {
      try {
        console.log(jsonData);
        let response = jsonData;
        console.log('Response', response);
        let data = response.notification.payload.additionalData;
        if (self.global.user_info != null) {
          if (data.url) {
            if (self.global.user_info) {
              if (self.global.user_info.iduser) {
                let currentUrl = self.router.url;
                console.log('Current URL', currentUrl);
                if (data.url == "terminar-compra") {
                  self.global.a_pagar = data;
                  self.navCtrl.navigateRoot("terminar-compra", { animated: true, animationDirection: 'forward' });
                }
                console.log('URL', data.url);
              }
            }
          }
        }
      } catch (error) {
        console.error('error', error);
      }
    };
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window["plugins"].OneSignal
      .startInit(this.oneSignalAppId, this.fireBaseKey)
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();
    window["plugins"].OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
      console.log("User accepted notifications: " + accepted);
    });

    window["plugins"].OneSignal.getIds((ids) => {
      this.global.device_id = ids.userId;
      if (this.global.user_info != null) {
        if (this.global.user_info.iduser) {
          this.api.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) => {
            console.log('Respuesta', resp);
          });
        }
      }
    });

    window["plugins"].OneSignal.addSubscriptionObserver((state) => {
      if (!state.from.subscribed && state.to.subscribed) {
        this.global.device_id = state.to.userId;
      }
    });

  }


  //  ionic cordova build android --prod --release  -->

  //  xcopy /y "C:\Users\Rafael Borrallo\AndroidStudioProjects\KeyStoreFressKo.jks"
  // "C:\Users\Rafael Borrallo\Workspace\Angular\Agroinvex\platforms\android\app\build\outputs\apk\release"

  // cd platforms\android\app\build\outputs\apk\release\

  // jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore KeyStoreFressKo.jks app-release-unsigned.apk KeyStoreFressKo
  // byoboz26

  // Copiar app-release-unsigned.apk a C:\Android\sdk\build-tools\29.0.2
  // xcopy /y "C:\Users\Rafael Borrallo\Workspace\Angular\Agroinvex\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk"
  // "C:\Android\sdk\build-tools\29.0.2"

  // cmd /  zipalign -v 4 app-release-unsigned.apk FressKo.apk
}
