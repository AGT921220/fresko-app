import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {
  cliente = {
    nombre_completo: "",
    celular: "",
    calle: "",
    numero: "",
    codigo_postal: "",
    cruces: "",
    colonia: "",
    correo: "",
    password: "",
    confirmar_password: "",
    municipio: "",
    estado: ""
  };
  codigo_postal:any;
  constructor(
    private global: GlobalService,
    private api: ApiService,
    private router:Router,
    private g:Globals
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.codigo_postal = navigation.extras.state;
    console.log('codigo_postal', this.codigo_postal);
    this.cliente.codigo_postal = this.codigo_postal;
  }

  ngOnInit() {
  }
  
  back(){
    this.router.navigate(['home']);
  }

  validarFormulario() {
    if (this.cliente.nombre_completo == "") {
      this.global.showToast("Ingresa tu nombre completo", "danger");
      return false;
    } else if (this.cliente.nombre_completo.length <= 4) {
      this.global.showToast("Debes escribir tu nombre completo", "danger");
      return false;
    }
    if (this.cliente.celular == "") {
      this.global.showToast("Ingresa tu numero de celular", "danger");
      return false;
    } else if (this.cliente.celular.length <= 7) {
      this.global.showToast("Debes escribir tu celular completo", "danger");
      return false;
    }
    if (this.cliente.calle == "") {
      this.global.showToast("Ingresa el nombre de tu calle", "danger");
      return false;
    } if (this.cliente.calle.length <= 3) {
      this.global.showToast("Ingresa correctamente el nombre de tu calle", "danger");
      return false;
    } if (this.cliente.numero == "") {
      this.global.showToast("Ingresa el numero de casa", "danger");
      return false;
    } if (this.cliente.colonia == "") {
      this.global.showToast("Ingresa el nombre de tu colonia", "danger");
      return false;
    } else if (this.cliente.colonia.length <= 3) {
      this.global.showToast("Ingresa correctamente el nombre de tu colonia.", "danger");
      return false;
    } if (this.cliente.municipio == "") {
      this.global.showToast("Ingresa el nombre de tu municipio", "danger");
      return false;
    }  if (this.cliente.estado == "") {
      this.global.showToast("Ingresa el nombre de tu estado", "danger");
      return false;
    }  if (this.cliente.correo == "") {
      this.global.showToast("Ingresa tu correo electronico", "danger");
      return false;
    } 
    
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.cliente.correo)) {
      this.global.showToast("El correo electronico es invalido.", "danger");
      return false;
    }
    
    if (this.cliente.password == "") {
      this.global.showToast("Debes indicar tu contraseña", "danger");
      return false;
    } if(this.cliente.password.length <= 5){
      this.global.showToast("La contraseña debe ser minimo de 5 caracteres.", "danger");
      return false;
    } if (this.cliente.confirmar_password == "") {
      this.global.showToast("Debes teclear la confirmacion de la contraseña", "danger");
      return false;
    }

    if (this.cliente.password != this.cliente.confirmar_password) {
      this.global.showToast("Las contraseñas no coinciden.", "danger");
      return false;
    }


    return true;
  }

  async enviarSolicitud() {
    let validation = this.validarFormulario();
    if (!validation) {
      return;
    }
    await this.global.showLoading("Registrando...");
    let response = null;
    await this.api.RegistrarCliente(this.cliente).toPromise().then((data: any) => {
      response = data;
      if (!data.success) {
        this.global.showToast(data.message, "danger");
      }
    }).catch(error => {
      this.global.dismissLoading();
    });
    await this.global.dismissLoading();
    if (response != null) {
      if (response.success) {
        console.log('Data', response.data);

        this.g.idUser = response.iduser;
        this.global.user_info = response.data;
        this.global.user_info.promotions_discount = response.promotions_discount;
        this.global.user_info.promotions_freedelivery = response.promotions_freedelivery;
        this.global.user_info.promotions_freeproduct = response.promotions_freeproduct;
        this.global.user_info.anuncios = response.anuncios;
        this.global.user_info.paquetes = response.paquetes;
        for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
          if (this.global.user_info.promotions_discount[i].promotions_carrousel == 1) {
            this.global.promotions_carrousel.push(this.global.user_info.promotions_discount[i]);
          }
        }
        for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
          if (this.global.user_info.promotions_freedelivery[i].promotions_carrousel == 1) {
            this.global.promotions_carrousel.push(this.global.user_info.promotions_freedelivery[i]);
          }
        }
        for (var i = 0; i < this.global.user_info.promotions_freeproduct.length; i++) {
          if (this.global.user_info.promotions_freeproduct[i].promotions_carrousel == 1) {
            this.global.promotions_carrousel.push(this.global.user_info.promotions_freeproduct[i]);
          }
        }


        for (var i = 0; i < this.global.user_info.anuncios.length; i++) {
          this.global.user_info.anuncios[i].imagen = "data:image/png;base64," +  this.global.user_info.anuncios[i].imagen;
        }
        for (var i = 0; i < this.global.user_info.paquetes.length; i++) {
          this.global.user_info.paquetes[i].imagen = "data:image/png;base64," +  this.global.user_info.paquetes[i].url;
        }

        this.global.user_info = response.data;
        this.g.idUser= this.global.user_info.iduser;
        this.global.showToastAndRedirect(response.message, "verificacion-cliente", response.data);
      }
    }
  }

}
