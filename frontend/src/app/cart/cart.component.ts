import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   listItem;
   nbElement=0;
   totalPricePanier;
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
  this.nbElement=this.cartService.getNbElement();
  this.listItem=this.cartService.getItems();
  this.totalPricePanier=this.cartService.calculTotalPrice();
  /*this.listItem.forEach(p=>{
  console.log('les elements de carte '+p.titre+' '+p.qt+' '+p.price);
  })*/

  }
  decrement(id){
  this.cartService.decrement(id);
  this.nbElement=this.cartService.getNbElement();
  }
  increment(id){
   this.cartService.increment(id);
   this.nbElement=this.cartService.getNbElement();
    }
   /* totalPanier(){
    this.totalPricePanier=this.cartService.calculTotalPrice();
    }*/
    validerPanier(){
    if(localStorage.getItem("token")==null){
    this.router.navigate(["/login"])
    }

    }

}
