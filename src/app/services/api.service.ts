import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly HOST = 'https://mercasa.mx/API/';
  //readonly HOST = 'http://localhost:4430/API/';
  constructor(private http: HttpClient) { }

  getUser(id_user) {
    const httpParams = new HttpParams().set('iduser', id_user);
    return this.http.post(this.HOST + 'getUser.php', httpParams);
  }

  updatePayment(idorder, subtotal, id_paypal, email, nombre) {
    let httpParams = new HttpParams()
      .set('idorder', idorder)
      .set('subtotal', subtotal)
      .set('id_paypal', id_paypal)
      .set('email', email)
      .set('nombre', nombre);
    return this.http.post(this.HOST + 'updatePayment.php', httpParams);
  }

  RegistrarCliente(obj) {
    return this.http.post(String(this.HOST + 'registrarCliente.php'), this.getFormData(obj));
  }

  RegistrarSinCobertura(obj) {
    return this.http.post(String(this.HOST + 'registrarNoCobertura.php'), this.getFormData(obj));
  }

  getFlags() {
    return this.http.get(String(this.HOST + 'getFlags.php'));
  }

  VerificarCobertura(codigo_postal) {
    let obj = {
      codigo_postal: codigo_postal
    }
    return this.http.post(String(this.HOST + 'verificarCobertura.php'), this.getFormData(obj));
  }

  VerificacionSMS(celular, code) {
    let obj = {
      celular: celular,
      code: code
    }
    return this.http.post(String(this.HOST + 'enviarSMSConfirmacion.php'), this.getFormData(obj));
  }

  updateVerificacionSMS(id_user) {
    let obj = {
      id_user: id_user
    }
    return this.http.post(String(this.HOST + 'updateVerificacionSMS.php'), this.getFormData(obj));
  }

  updateDevice(iduser, device_id) {
    const httpParams = new HttpParams().set('iduser', iduser).set('device_id', device_id);
    return this.http.post(this.HOST + 'updateDevice.php', httpParams);
  }

  login(telephone: string, password: string) {
    const httpParams = new HttpParams().set('name', telephone).set('password', password);
    return this.http.post(this.HOST + 'login.php', httpParams);
  }

  getProducts(id: string) {
    const httpParams = new HttpParams().set('idcategory', id);
    return this.http.post(this.HOST + 'getProductsV2.php', httpParams);
  }

  createOrder(iduser: number, pickup: number, shoppingList: any[], notes: string, pickupnotes: string, free_delivery, discount, free_product, metodo_pago: string) {
    let httpParams = new HttpParams()
      .set('iduser', '' + iduser)
      .set('notes', '' + notes)
      .set('pickupnotes', '' + pickupnotes)
      .set('pickup', '' + pickup)
      .set('free_delivery', '' + free_delivery)
      .set('discount', '' + discount)
      .set('free_product', '' + free_product)
      .set('metodo_pago', '' + metodo_pago);
    shoppingList.forEach((product: []) => {
      httpParams = httpParams.append('idproduct[]', product['idproduct']);
      httpParams = httpParams.append('kg[]', '' + parseFloat(product['kg']));
      httpParams = httpParams.append('pc[]', product['pc']);
      const val = (product['selectedWeight'] / 1000) * product['price'];
      const strVal = '' + val;
      httpParams = httpParams.append('prices[]', strVal);
    });
    return this.http.post(this.HOST + 'createOrderV2.php', httpParams);
  }

  getOrders(idUser: string) {
    const httpParams = new HttpParams().set('iduser', idUser).set('token', 'RBE_DEV_@_#_|__*');
    return this.http.post(this.HOST + 'getOrders.php', httpParams);
  }


  getFormData(data) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    return formData;
  }

  checkReferredCode(referred_code) {
    return this.http.get(this.HOST + 'checkReferredCode.php?referred_code=' + referred_code);

  }

  registerReferredCode(referred_code, user_id) {

    const httpParams = new HttpParams().set('referido_id', referred_code).set('referenciado_id', user_id);
    return this.http.post(this.HOST + 'registerReferredCode.php', httpParams);

  }


}
