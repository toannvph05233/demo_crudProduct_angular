import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ProductComponent} from "./product.component";

const routes: Routes = [
  {
    path: 'create', component: CreateProductComponent,
  },
  {
    path: '', component: ProductComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
