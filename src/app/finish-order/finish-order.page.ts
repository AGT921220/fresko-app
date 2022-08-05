import { GlobalService } from './../services/global.service';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Globals } from 'src/app/globals';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.page.html',
  styleUrls: ['./finish-order.page.scss'],
  providers: [NavParams]
})
export class FinishOrderPage {
  // implements OnInit

  showList = true;
  shoppingList = [];
  totalCost = 0;
  notes = '';
  id_category = 0;
  constructor(
    private apiService: ApiService,
    public g: Globals,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nav: NavController,
    private global: GlobalService
  ) {
  }

  ionViewWillEnter() {
    this.getTotalCost();
    console.log('Shipping list', this.shoppingList);
  }

  getTotalCost() {
    this.totalCost = 0;
    this.shoppingList = [];
    for (let i = 0; i < this.g.fruits.length; i++) {
      if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.fruits[i]);
        this.totalCost += (this.g.fruits[i].selectedWeight / 1000) * this.g.fruits[i].price;
      }
    }
    for (let i = 0; i < this.g.vegetables.length; i++) {
      if (parseFloat(this.g.vegetables[i].kg) > 0 || parseInt(this.g.vegetables[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.vegetables[i]);
        this.totalCost += (this.g.vegetables[i].selectedWeight / 1000) * this.g.vegetables[i].price;
      }
    }

    for (let i = 0; i < this.g.spices.length; i++) {
      if (parseFloat(this.g.spices[i].kg) > 0 || parseInt(this.g.spices[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.spices[i]);
        this.totalCost += (this.g.spices[i].selectedWeight / 1000) * this.g.spices[i].price;
      }
    }

    for (let i = 0; i < this.g.carnes.length; i++) {
      if (parseFloat(this.g.carnes[i].kg) > 0 || parseInt(this.g.carnes[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.carnes[i]);
        this.totalCost += (this.g.carnes[i].selectedWeight / 1000) * this.g.carnes[i].price;
      }
    }

    for (let i = 0; i < this.g.cremeria.length; i++) {
      if (parseFloat(this.g.cremeria[i].kg) > 0 || parseInt(this.g.cremeria[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.cremeria[i]);
        this.totalCost += (this.g.cremeria[i].selectedWeight / 1000) * this.g.cremeria[i].price;
      }
    }

    for (let i = 0; i < this.g.otros.length; i++) {
      if (parseFloat(this.g.otros[i].kg) > 0 || parseInt(this.g.otros[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.otros[i]);
        this.totalCost += (this.g.otros[i].selectedWeight / 1000) * this.g.otros[i].price;
      }
    }
    if (this.shoppingList.length === 0) {
      this.showList = false;
    } else {
      this.showList = true;
    }
    if (this.g.notes) {
      if (this.g.notes.length > 0) {
        this.notes = this.g.notes;
      }
    }
    console.log('Shipping list', this.shoppingList);
  }

  back() {
    if(this.global.finish_order_return == ""){
      this.router.navigate(['/tabs/categories']);
    }else{
      this.router.navigate([this.global.finish_order_return]);
    }
  }

  sendOrder() {
    if (this.shoppingList.length > 0) {
      this.g.notes = this.notes;
      this.g.shoppingList = this.shoppingList;
      this.router.navigate(['send-order']);
    } else {
      return this.global.showToast("No hay nada en el carrito", "danger");
    }
  }

  removePosition(position: number) {
    const idproduct = this.shoppingList[position].idproduct;
    this.shoppingList = this.shoppingList.filter((obj) => obj.idproduct !== idproduct);
    for (let i = 0; i < this.g.fruits.length; i++) {
      if (this.g.fruits[i].idproduct == idproduct) {
        this.g.fruits[i].kg = 0;
        this.g.fruits[i].pc = 0;
        this.g.fruits[i].selectedWeight = 0;
      }
    }
    for (let i = 0; i < this.g.vegetables.length; i++) {
      if (this.g.vegetables[i].idproduct == idproduct) {
        this.g.vegetables[i].kg = 0;
        this.g.vegetables[i].pc = 0;
        this.g.vegetables[i].selectedWeight = 0;
      }
    }

    for (let i = 0; i < this.g.spices.length; i++) {
      if (this.g.spices[i].idproduct == idproduct) {
        this.g.spices[i].kg = 0;
        this.g.spices[i].pc = 0;
        this.g.spices[i].selectedWeight = 0;
      }
    }

    for (let i = 0; i < this.g.carnes.length; i++) {
      if (this.g.carnes[i].idproduct == idproduct) {
        this.g.carnes[i].kg = 0;
        this.g.carnes[i].pc = 0;
        this.g.carnes[i].selectedWeight = 0;
      }
    }

    for (let i = 0; i < this.g.cremeria.length; i++) {
      if (this.g.cremeria[i].idproduct == idproduct) {
        this.g.cremeria[i].kg = 0;
        this.g.cremeria[i].pc = 0;
        this.g.cremeria[i].selectedWeight = 0;
      }
    }

    for (let i = 0; i < this.g.otros.length; i++) {
      if (this.g.otros[i].idproduct == idproduct) {
        this.g.otros[i].kg = 0;
        this.g.otros[i].pc = 0;
        this.g.otros[i].selectedWeight = 0;
      }
    }
    if (this.shoppingList.length === 0) {
      this.showList = false;
    } else {
      this.totalCost = 0;
      this.showList = true;
      for (let i = 0; i < this.shoppingList.length; i++) {
        if (this.shoppingList[i].isKg == '0' && this.shoppingList[i].isPc == '1') {
          this.totalCost += this.shoppingList[i].pc * this.shoppingList[i].price;
        } else {
          this.totalCost += (this.shoppingList[i].selectedWeight / 1000) * this.shoppingList[i].price;
        }
      }
    }
  }

  count(count: number, idproduct: string, type: string) {
    for (let i = 0; i < this.shoppingList.length; i++) {
      if (this.shoppingList[i]["idproduct"] == idproduct) {
        if (type == "K") {
          if (count == 1995) {
            this.shoppingList[i]["kg"] =
              parseFloat(this.shoppingList[i]["kg"]) +
              parseFloat(this.shoppingList[i]["sum"]);
          } else if (count == -1995) {
            this.shoppingList[i]["kg"] =
              parseFloat(this.shoppingList[i]["kg"]) -
              parseFloat(this.shoppingList[i]["sum"]);
            this.shoppingList[i]["pc"] =
              parseFloat(this.shoppingList[i]["pc"]) - 1;
          } else {
            this.shoppingList[i]["kg"] = parseFloat(this.shoppingList[i]["kg"]) + count;
          }

          if (parseFloat(this.shoppingList[i]["kg"]) < 0) {
            this.shoppingList[i]["kg"] = 0;
          }
        } else {
          this.shoppingList[i]["pc"] = parseInt(this.shoppingList[i]["pc"], 10) + count;
          if (parseInt(this.shoppingList[i]["pc"], 10) < 0) {
            this.shoppingList[i]["pc"] = 0;
          }
        }
        this.shoppingList[i]["selectedWeight"] =
          this.shoppingList[i]["pc"] * this.shoppingList[i]["weight"] +
          parseFloat(this.shoppingList[i]["kg"]) * 1000;
        break;
      }
    }
    this.getTotalCost();
  }
}
