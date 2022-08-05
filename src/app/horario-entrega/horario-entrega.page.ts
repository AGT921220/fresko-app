import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Globals } from '../globals';

@Component({
  selector: 'app-horario-entrega',
  templateUrl: './horario-entrega.page.html',
  styleUrls: ['./horario-entrega.page.scss'],
  providers: [NavParams]
})
export class HorarioEntregaPage implements OnInit {
  horario_seleccionado = '';
  horario_seleccionado_text = '';
  es_modal = false;
  tipo = "send-order";
  id_category = 0;
  constructor(
    private nav:NavController,
    private router:Router,
    private global:GlobalService,
    private g:Globals,
    private navParams:NavParams,
    private modalCtrl:ModalController
  ) { 
    const navigation = this.router.getCurrentNavigation();
    this.tipo = navigation.extras.state.tipo;
    this.id_category = navigation.extras.state.id_category;
  }


  ngOnInit() {
    this.es_modal = this.navParams.get('es_modal');
  }

  back() {
    // if(this.es_modal == false){
      this.nav.pop(); 
    // }else{
      // this.modalCtrl.dismiss();
    // }
  }

  elegirHorario(tipo){
    this.horario_seleccionado = tipo;
    if(this.horario_seleccionado == "MATUTINO"){
      this.horario_seleccionado_text = "A DOMICILIO";
    } else{
      this.horario_seleccionado_text = "Entrega en la salida de la escuela";
    }
  }

  continuar(){
    console.log('shoppingList Horario entrega', this.g.shoppingList);
    if(this.horario_seleccionado == ""){
      return this.global.showToast("Selecciona un horario para la entrega.", "danger");
    }
    this.g.horario = this.horario_seleccionado;
    this.router.navigate(['/metodo-de-pago']);
  }

}
