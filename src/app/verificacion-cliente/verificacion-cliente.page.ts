import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-verificacion-cliente',
  templateUrl: './verificacion-cliente.page.html',
  styleUrls: ['./verificacion-cliente.page.scss'],
})
export class VerificacionClientePage implements OnInit {
  cliente:any;
  codigo_verificacion = "";
  constructor(
    private global:GlobalService,
    public api:ApiService,
    private router:Router,
    private g:Globals
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation.extras.state;
    console.log('Cliente Recibido', this.cliente);
  }

  async ngOnInit() {
    await this.api.VerificacionSMS(this.cliente.telephone, this.cliente.codigo_verificacion).toPromise().then((response) =>{
      console.log('Prueba', response);
    });
  }

  backToHome(){
    this.router.navigate(['home']);
  }

  async enviarSolicitud(){
    if(this.cliente.codigo_verificacion == this.codigo_verificacion){
      await this.global.showLoading("Verificando..");
      let result = null;
      await this.api.updateVerificacionSMS(this.cliente.iduser).toPromise().then( (response:any) => {
        result = response;
        if(!response.success){
          this.global.showToast(response.message, "danger");
        }
      }).catch(error =>{
        this.global.dismissLoading();
      });
      await this.global.dismissLoading();
      if(result){
        if(result.success){
          this.global.setItemStorage('idUser', this.g.idUser);
          this.global.user_info.verificado = 1;
          this.global.setItemStorage('user_info', JSON.stringify(this.global.user_info));
          this.global.showToastAndRedirect(result.message, "/tabs/categories");
        }
      }
    } else{
      this.codigo_verificacion = "";
      return this.global.showToast("El codigo proporcionado es incorrecto.", "danger");
    }
  }

}
