import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./pages/product/product.component";
import { ReceivedComponent } from "./pages/received/received.component";
import { SaleComponent } from "./pages/sale/sale.component";
import { StatisticalComponent } from "./pages/statistical/statistical.component";
import { AddProductComponent } from "./pages/product/add-product/add-product.component";
import { BrandComponent } from "./pages/brand/brand.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/received' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'product', component:ProductComponent },
  { path: 'received', component:ReceivedComponent },
  { path: 'sale', component:SaleComponent },
  { path: 'statistical', component:StatisticalComponent },
  { path: 'brand', component:BrandComponent },
  { path: 'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
