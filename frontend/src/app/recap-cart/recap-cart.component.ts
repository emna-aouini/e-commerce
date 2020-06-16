import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-recap-cart',
  templateUrl: './recap-cart.component.html',
  styleUrls: ['./recap-cart.component.css']
})
export class RecapCartComponent implements OnInit {
   listItem;
   nbElement=0;
   totalPricePanier;

  constructor(private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
   this.nbElement=this.cartService.getNbElement();
    this.listItem=this.cartService.getItems();
    this.totalPricePanier=this.cartService.calculTotalPrice();
  }

   validerPanier(){
      if(localStorage.getItem("token")==null){
      this.router.navigate(["/login"])
      }else{
      this.router.navigate(["/livraison"])}

}
}
