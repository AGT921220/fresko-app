import { GlobalService } from './../services/global.service';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo-postal-sin-cobertura',
  templateUrl: './codigo-postal-sin-cobertura.page.html',
  styleUrls: ['./codigo-postal-sin-cobertura.page.scss'],
})
export class CodigoPostalSinCoberturaPage implements OnInit {
  codigo_postal = "";
  correo = "";
  constructor(
    private router:Router,
    private api:ApiService,
    private global:GlobalService
  ) { }

  ngOnInit() {
  }

  async enviarSolicitud(){
    if(this.codigo_postal == ""){
      return this.global.showToast("Ingresa el codigo postal de tu zona", "danger");
    } if(this.correo == ""){
      return this.global.showToast("Ingresa tu correo electronico.", "danger");
    }
    let obj = {
      codigo_postal: this.codigo_postal,
      correo: this.correo
    }
    await this.global.showLoading("Cargando..");
    let result = null;
    await this.api.RegistrarSinCobertura(obj).toPromise().then( (response:any) => {
      result = response;
      if(!response.success){
        this.global.showToast(response.message, "danger");
      }
    }).catch(error =>{
      this.global.dismissLoading();
    });
    await this.global.dismissLoading();
    if(result != null){
      if(result.success){
        this.global.showToastAndRedirect(result.message, "/home");
      }
    }
  }

  back(){
    this.router.navigate(['registro']);
  }
}
