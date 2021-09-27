import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: '', component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterRoutingModule {


}
