import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {EmployeComponent} from './employe/employe.component';
import {HeaderComponent} from './header/header.component';
import{CorpComponent } from './corp/corp.component';
import {NewproductComponent} from './newproduct/newproduct.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';
import {LivraisonComponent} from './livraison/livraison.component';


const routes: Routes = [
{ path: '', redirectTo: 'corp', pathMatch: 'full' },
{path:'about',component:AboutComponent},
{path:'employe', component:EmployeComponent},
{path:'navbar',component:HeaderComponent},
{path:'corp',component:CorpComponent },
{path:'addproduct',component:NewproductComponent},
{path:'detailsproduct/:id',component:ProductDetailsComponent},
{path:'cart',component:CartComponent},
{path:'login',component:LoginComponent},
{path:'livraison',component:LivraisonComponent}
/*{path:'',redirectTo:'/about',pathMatch:'full'}*/
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
