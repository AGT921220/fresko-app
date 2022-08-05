import { PagarStripePageModule } from './pagar-stripe/pagar-stripe.module';
import { Stripe } from '@ionic-native/stripe/ngx';
import { GlobalService } from './services/global.service';
import { TabsPageModule } from './tabs/tabs.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { ApiService } from "./services/api.service";
import { Globals } from "./globals";
import { IonicStorageModule } from "@ionic/storage";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppVersion } from '@ionic-native/app-version/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Tabs2PageModule } from './tabs2/tabs2.module';
import { FinishOrderPageModule } from './finish-order/finish-order.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FinishOrderPageModule,
    TabsPageModule,
    PagarStripePageModule,
    Tabs2PageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    GlobalService,
    InAppBrowser,
    Globals,
    Stripe,
    AppVersion,
    OneSignal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
