import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule) },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesPageModule),
  },
  {
    path: 'referred-register',
    loadChildren: () => import('./referred-register/referred-register.module').then((m) => m.ReferredRegisterPageModule),
  },

  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsPageModule),
  },
  {
    path: 'finish-order',
    loadChildren: () => import('./finish-order/finish-order.module').then((m) => m.FinishOrderPageModule),
  },
  {
    path: 'send-order',
    loadChildren: () => import('./send-order/send-order.module').then((m) => m.SendOrderPageModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'order-details/:id',
    loadChildren: () => import('./order-details/order-details.module').then((m) => m.OrderDetailsModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cp-nocobertura',
    loadChildren: () => import('./codigo-postal-sin-cobertura/codigo-postal-sin-cobertura.module').then( m => m.CodigoPostalSinCoberturaPageModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'verificacion-cliente',
    loadChildren: () => import('./verificacion-cliente/verificacion-cliente.module').then( m => m.VerificacionClientePageModule)
  },
  {
    path: 'promos-disponibles',
    loadChildren: () => import('./promos-disponibles/promos-disponibles.module').then( m => m.PromosDisponiblesPageModule)
  },
  {
    path: 'horario-entrega',
    loadChildren: () => import('./horario-entrega/horario-entrega.module').then( m => m.HorarioEntregaPageModule)
  },
  {
    path: 'metodo-de-pago',
    loadChildren: () => import('./metodo-de-pago/metodo-de-pago.module').then( m => m.MetodoDePagoPageModule)
  },
  {
    path: 'efectivo-compra',
    loadChildren: () => import('./efectivo-compra/efectivo-compra.module').then( m => m.EfectivoCompraPageModule)
  },
  {
    path: 'pago-electronico',
    loadChildren: () => import('./pago-electronico/pago-electronico.module').then( m => m.PagoElectronicoPageModule)
  },
  {
    path: 'terminar-compra',
    loadChildren: () => import('./terminar-compra/terminar-compra.module').then( m => m.TerminarCompraPageModule)
  },
  {
    path: 'pago-transferencia',
    loadChildren: () => import('./pago-transferencia/pago-transferencia.module').then( m => m.PagoTransferenciaPageModule)
  },
  {
    path: 'paquetes-disponibles',
    loadChildren: () => import('./paquetes-disponibles/paquetes-disponibles.module').then( m => m.PaquetesDisponiblesPageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  },
  {
    path: 'mercado-pago',
    loadChildren: () => import('./mercado-pago/mercado-pago.module').then( m => m.MercadoPagoPageModule)
  },
  {
    path: 'pagar-stripe',
    loadChildren: () => import('./pagar-stripe/pagar-stripe.module').then( m => m.PagarStripePageModule)
  }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
