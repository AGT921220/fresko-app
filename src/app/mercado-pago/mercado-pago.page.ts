import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
declare var MercadoPago: any;
@Component({
  selector: 'app-mercado-pago',
  templateUrl: './mercado-pago.page.html',
  styleUrls: ['./mercado-pago.page.scss'],
})
export class MercadoPagoPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
    // Step #3
    const mp = new MercadoPago('TEST-33282014-4d13-4154-b658-09514cf35a12', { locale: 'es-MX' });
    const cardForm = mp.cardForm({
      amount: '1',
      autoMount: true,
      processingMode: 'aggregator',
      form: {
        id: 'form-checkout',
        cardholderName: {
          id: 'form-checkout__cardholderName',
          placeholder: 'Cardholder name',
        },
        cardholderEmail: {
          id: 'form-checkout__cardholderEmail',
          placeholder: 'Email',
        },
        cardNumber: {
          id: 'form-checkout__cardNumber',
          placeholder: 'Card number',
        },
        cardExpirationMonth: {
          id: 'form-checkout__cardExpirationMonth',
          placeholder: 'MM'
        },
        cardExpirationYear: {
          id: 'form-checkout__cardExpirationYear',
          placeholder: 'YYYY'
        },
        securityCode: {
          id: 'form-checkout__securityCode',
          placeholder: 'CVV',
        },
        installments: {
          id: 'form-checkout__installments',
          placeholder: 'Total installments'
        },
        identificationType: {
          id: 'form-checkout__identificationType',
          placeholder: 'Document type'
        },
        identificationNumber: {
          id: 'form-checkout__identificationNumber',
          placeholder: 'Document number'
        },
        issuer: {
          id: 'form-checkout__issuer',
          placeholder: 'Issuer'
        }
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn('Form Mounted handling error: ', error)
          console.log('Form mounted')
        },
        onFormUnmounted: error => {
          if (error) return console.warn('Form Unmounted handling error: ', error)
          console.log('Form unmounted')
        },
        onIdentificationTypesReceived: (error, identificationTypes) => {
          if (error) return console.warn('identificationTypes handling error: ', error)
          console.log('Identification types available: ', identificationTypes)
        },
        onPaymentMethodsReceived: (error, paymentMethods) => {
          if (error) return console.warn('paymentMethods handling error: ', error)
          console.log('Payment Methods available: ', paymentMethods)
        },
        onIssuersReceived: (error, issuers) => {
          if (error) return console.warn('issuers handling error: ', error)
          console.log('Issuers available: ', issuers)
        },
        onInstallmentsReceived: (error, installments) => {
          if (error) return console.warn('installments handling error: ', error)
          console.log('Installments available: ', installments)
        },
        onCardTokenReceived: (error, token) => {
          if (error) return console.warn('Token handling error: ', error)
          console.log('Token available: ', token)
        },
        onSubmit: (event) => {
          event.preventDefault();
          const cardData = cardForm.getCardFormData();
          console.log('CardForm data available: ', cardData)
        },
        onFetching: (resource) => {
          console.log('Fetching resource: ', resource)

          // Animate progress bar
          const progressBar = document.querySelector('.progress-bar')
          progressBar.removeAttribute('value')

          return () => {
            progressBar.setAttribute('value', '0')
          }
        },
      }
    })
  }

  back() {
    this.nav.pop();
  }

}
