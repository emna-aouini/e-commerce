import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import {FormsModule} from '@angular/forms';
import {ConfigService} from './config.service';
import { EmployeComponent } from './employe/employe.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CorpComponent } from './corp/corp.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RecapCartComponent } from './recap-cart/recap-cart.component';
import { CommandeComponent } from './commande/commande.component';
import { LivraisonComponent } from './livraison/livraison.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    HeaderComponent,
    CorpComponent,
    NewproductComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    RecapCartComponent,
    CommandeComponent,
    LivraisonComponent,
   // AboutComponent

  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     HttpClientModule,

     FormsModule,
     FontAwesomeModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
