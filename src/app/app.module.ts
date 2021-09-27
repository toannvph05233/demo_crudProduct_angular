import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ToanComponent } from './toan/toan.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {AppRouterRoutingModule} from "./app-router-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ToanComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
