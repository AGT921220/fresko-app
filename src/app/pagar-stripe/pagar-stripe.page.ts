import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Stripe } from '@ionic-native/stripe/ngx';
import { GlobalService } from './../services/global.service';
import { Card } from './../interfaces/card';
import { CustomIcons } from './../custom-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar-stripe',
  templateUrl: './pagar-stripe.page.html',
  styleUrls: ['./pagar-stripe.page.scss'],
})
export class PagarStripePage implements OnInit {
  years = [
    21, 22, 23, 24, 25, 26, 26, 27, 28, 30
  ];
  //Iconos
  bank_icon = null;
  icon_visa = CustomIcons.visa;
  icon_mastercard = CustomIcons.mastercard;
  icon_american_express = CustomIcons.american_express;
  icon_cvv = CustomIcons.cvv;
  cardNumber = "";
  cardMonth: any = "";
  cardCVV = "";
  cardYear: any = "";
  stripeKey = "pk_test_51JUanZHp7t5AdMQYDT4tXnoji8StJQFqnnzbQR9JXMpsovRohmjWxi8rgNMR3Ypo9L97vnNsVArPrsPBNM4iCTQf00R1gWa9cy";
  constructor(
    private global: GlobalService,
    private stripe: Stripe,
    private http: HttpClient,
    private modalCtrl: ModalController
  ) {
    this.stripeKey = this.global.getAppConfigFlag("STRIPE_KEY");
  }

  closeModal(success = false, data = null) {
    this.modalCtrl.dismiss({ success: success, data: data });
  }

  findIssuerName() {
    console.log('cardNumber', this.cardNumber);
    if (this.cardNumber.length >= 4) {
      let issuerName = this.detectCardType(this.cardNumber.replace(' ', ''));
      console.log('Issuer', issuerName);
      switch (issuerName) {
        case "visa":
          this.bank_icon = this.icon_visa;
          break;
        case "mastercard":
          this.bank_icon = this.icon_mastercard;
          break;
        case "amex":
          this.bank_icon = this.icon_american_express;
          break;
        default:
          this.bank_icon = null;
          break;
      }
    } else {
      this.bank_icon = null;
    }
  }

  detectCardType(number) {
    var re = {
      electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
      maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      dankort: /^(5019)\d+$/,
      interpayment: /^(636)\d+$/,
      unionpay: /^(62|88)\d+$/,
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    }

    for (var key in re) {
      if (re[key].test(number)) {
        return key
      }
    }
  }

  ngOnInit() {
    // this.fillYearList();
    console.log('Years', this.years);
  }

  async validacionesTarjeta() {
    if (this.cardNumber == "") {
      return await this.global.showToast("Ingresa el numero de tarjeta", "danger");
    }
    if (this.cardNumber.length != 19) {
      return await this.global.showToast("El número de tarjeta proporcionado no es válido", "danger");
    } if (this.cardMonth == "") {
      return await this.global.showToast("La fecha de vencimiento proporcionada no es válida", "danger");
    } if (this.cardYear == "") {
      return await this.global.showToast("El año proporcionado no es válido", "danger");
    } if (this.cardCVV == "") {
      return await this.global.showToast("El código CVV proporcionado no es válido", "danger");
    }
    this.payWithStripe();
  }

  fillYearList() {
    let initYear = 21;
    this.years = [];
    for (let year = initYear; year < (initYear + 10); year++) {
      this.years.push(year);
    }
  }


  async payWithStripe() {
    let comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
    let comision_iva = comision * 0.16;
    let a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
    console.log('A Pagar', a_pagar);
    let cardDetails = {
      number: this.cardNumber.toString().replace(/ /g, ''),
      expMonth: parseInt(this.cardMonth),
      expYear: parseInt(this.cardYear),
      cvc: this.cardCVV.toString()
    }
    await this.global.showLoading("Cobrando..");
    try {
      console.log('cardDetails', cardDetails);
      this.stripe.setPublishableKey(this.stripeKey);

      this.stripe.createCardToken(cardDetails)
        .then(token => {
          console.log(token);
          this.makePayment(token.id);
        })
        .catch(error => {
          this.global.dismissLoading();
          this.global.showToast(error, "danger")
        });
    } catch (error) {
      this.global.dismissLoading();
    }
  }

  async makePayment(token) {
    let comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
    let comision_iva = comision * 0.16;
    let a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
    console.log('A Pagar', a_pagar);
    let amount = parseInt(a_pagar) * 100;
    try {
      this.http
        .get(`https://us-central1-mercasa-e6e4d.cloudfunctions.net/payWithStripe?token=${token}&amount=${amount}&currency=MXN`)
        .subscribe((data: any) => {
          console.log(data);
          this.global.dismissLoading();
          if (data.status) {
            if (data.status == "succeeded") {
              this.global.showToast("El pago ha sido completado con exito");
              let obj = {
                id_pago: data.id,
                card: data.payment_method_details.card.last4,
                pago: (data.amount / 100)
              }
              this.closeModal(true, obj);
            }
          } else {
            if (data.raw) {
              if (data.raw.statusCode) {
                let param = "";
                if (data.raw.param) {
                  param = " en " + data.raw.param;
                }
                this.global.showToast(data.raw.message + param, "danger");

              }
            }
          }
        });
    } catch (error) {
      await this.global.dismissLoading();
    }
  }

}
