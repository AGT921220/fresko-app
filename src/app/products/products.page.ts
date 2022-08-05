import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Globals } from "src/app/globals";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { GlobalService } from "../services/global.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"]
})
export class ProductsPage implements OnInit {
  id: string;
  products = [];
  nombre_categoria = "";
  constructor(
    private apiService: ApiService,
    private g: Globals,
    private global:GlobalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  categorias = [
    {
      id: 1,
      text: "VERDURAS",
    },
    {
      id: 0,
      text: "FRUTAS"
    }, {
      id: 2,
      text: "ESPECIAS"
    },
    {
      id: 3,
      text: "CARNES"
    },
    {
      id: 4,
      text: "CREMERIA"
    }, {
      id: 5,
      text: "OTROS"
    }];
  submenus = [];
  productsAux = [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
      this.global.id_category = parseInt(this.id);
      this.getCategoryName(this.id);

      this.productsAux = [];
      if (parseInt(this.id, 10) === 0) {
        this.productsAux = this.g.fruits;
      } else if (parseInt(this.id, 10) === 1) {
        this.productsAux = this.g.vegetables;
      } else if (parseInt(this.id, 10) == 2) {
        this.productsAux = this.g.spices;
      } else if (parseInt(this.id, 10) == 3) {
        this.productsAux = this.g.carnes;
      } else if (parseInt(this.id, 10) == 4) {
        this.productsAux = this.g.cremeria;
      } else if (parseInt(this.id, 10) == 5) {
        this.productsAux = this.g.otros;
      }
      if (this.productsAux.length == 0) {
        this.apiService.getProducts(this.id).subscribe((response: any) => {
          this.submenus = response.submenus;
          this.products = this.submenus[0].products;
          this.showProductsSubmenu(this.submenus[0]);
        });
      } else{
        this.apiService.getProducts(this.id).subscribe((response: any) => {
          this.submenus = response.submenus;
        });
        this.products = this.productsAux;
        this.products.map(x =>{
          let exist = this.productsAux.filter(y =>{
            if(y.idproduct == x.idproduct){
              return y;
            }
          });
          if(exist.length >= 1){
            x = exist[0];
          }
        });
        this.filterProducts();
      }
    });
  }

  getStyle(product){
    if(product.visible == 1){
      return "padding:0;width:50%";
    } else{
      return "padding:0;";
    }
  }

  showProductsSubmenu(item) {
    let submenu_products = item.products;
    this.products.map(x =>{
      let exist = this.productsAux.filter(y =>{
        if(y.idproduct == x.idproduct){
          return y;
        }
      });
      if(exist.length >= 1){
        x = exist[0];
      }
    });
    this.products.map(x =>{
      let exist = submenu_products.filter(y =>{
        if(x.idproduct == y.idproduct){
          return y;
        }
      });
      if(exist.length >= 1){
        x.visible = 1;
      } else{
        x.visible = 0;
      }
    })
    this.filterProducts();
  }

  getCategoryName(id) {
    let result = this.categorias.filter(x => {
      if (x.id == id) {
        return x;
      }
    });
    let text = "";
    if (result.length >= 1) {
      text = result[0].text;
    }
    this.nombre_categoria = text;
  }

  count(count: number, idproduct: string, type: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]["idproduct"] == idproduct) {
        if (type == "K") {
          if (count == 1995) {
            this.products[i]["kg"] =
              parseFloat(this.products[i]["kg"]) +
              parseFloat(this.products[i]["sum"]);
          } else if (count == -1995) {
            this.products[i]["kg"] =
              parseFloat(this.products[i]["kg"]) -
              parseFloat(this.products[i]["sum"]);
          } else {
            this.products[i]["kg"] = parseFloat(this.products[i]["kg"]) + count;
          }

          if (parseFloat(this.products[i]["kg"]) < 0) {
            this.products[i]["kg"] = 0;
          }
        } else {
          this.products[i]["pc"] = parseInt(this.products[i]["pc"], 10) + count;
          if (parseInt(this.products[i]["pc"], 10) < 0) {
            this.products[i]["pc"] = 0;
          }
        }
        this.products[i]["selectedWeight"] =
          this.products[i]["pc"] * this.products[i]["weight"] +
          parseFloat(this.products[i]["kg"]) * 1000;
        break;
      }
    }
    if (parseInt(this.id, 10) === 0) {
      this.g.fruits = this.products;
    } else if (parseInt(this.id, 10) === 1) {
      this.g.vegetables = this.products;
    } else if (parseInt(this.id, 10) == 2) {
      this.g.spices = this.products;
    } else if (parseInt(this.id, 10) == 3) {
      this.g.carnes = this.products;
    } else if (parseInt(this.id, 10) == 4) {
      this.g.cremeria = this.products;
    } else if (parseInt(this.id, 10) == 5) {
      this.g.otros = this.products;
    }
  }

  saveKG(value, i): void {
    if (!isNaN(value)) {
      if (parseFloat(value) < 0) {
        this.products[i]["kg"] = 0;
      } else {
        this.products[i]["kg"] = value;
      }
    } else {
      let kg = value.split(" ")[0];
      this.products[i]["kg"] = kg;
    }
    this.products[i]["selectedWeight"] =
      this.products[i]["pc"] * this.products[i]["weight"] +
      parseFloat(this.products[i]["kg"]) * 1000;
    if (parseInt(this.id, 10) === 0) {
      this.g.fruits = this.products;
    } else if (parseInt(this.id, 10) === 1) {
      this.g.vegetables = this.products;
    } else {
      this.g.spices = this.products;
    }
  }
  savePC(value, i): void {
    if (!isNaN(value)) {
      if (parseFloat(value) < 0) {
        this.products[i]["pc"] = 0;
      } else {
        this.products[i]["pc"] = value;
      }
    } else {
      let pc = value.split(" ")[0];
      this.products[i]["pc"] = pc;
    }
    this.products[i]["selectedWeight"] =
      this.products[i]["pc"] * this.products[i]["weight"] +
      parseFloat(this.products[i]["kg"]) * 1000;
    if (parseInt(this.id, 10) === 0) {
      this.g.fruits = this.products;
    } else if (parseInt(this.id, 10) === 1) {
      this.g.vegetables = this.products;
    } else if (parseInt(this.id, 10) == 2) {
      this.g.spices = this.products;
    } else if (parseInt(this.id, 10) == 3) {
      this.g.carnes = this.products;
    } else if (parseInt(this.id, 10) == 4) {
      this.g.cremeria = this.products;
    } else if (parseInt(this.id, 10) == 5) {
      this.g.otros = this.products;
    }
  }

  filterProducts() {
    this.products = this.products.filter(product => product.activated == 1);
    return this.products;
  }

  back() {
    this.router.navigate(["tabs/categories"]);
  }

  finishOrder() {
    this.global.finish_order = "products";
    this.global.finish_order_return = "/tabs2/products/" + this.global.id_category;
    this.router.navigate(["finish-order"]);
  }

}
