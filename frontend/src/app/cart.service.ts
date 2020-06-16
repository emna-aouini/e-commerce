import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];
  sommeQt=0;
  totalPrice=0;
  constructor() { }
  addItem(p){
  console.log('item is:'+p.id+' '+p.titre+' '+p.description);
  let index=this.items.findIndex(el=>el.id===p.id);
  if(index>-1){
  this.items[index].qt=this.items[index].qt+1;
  }else{
  this.items.push({id:p.id,couverture:p.couverture,titre:p.titre,price:p.price,qt:1});
  }
  /*this.items.forEach(p=>{
  console.log('element de tableau:'+p.id+' '+p.titre+' '+p.couverture+' '+p.qt+' '+p.price);
  })*/
  }

    getItems() {
      return this.items;
    }
    getNbElement(){
    this.sommeQt=0;
    this.items.forEach(p=>{
    this.sommeQt=this.sommeQt+p.qt;
    })
    return this.sommeQt;
    }
    decrement(id){
    this.items.forEach(p=>{
    if(p.id==id){
    p.qt=p.qt-1;
    }
    })
    }
    increment(id){
    this.items.forEach(p=>{
    if(p.id==id){
    p.qt=p.qt+1;
    }
    })
    }

    calculTotalPrice(){
    this.totalPrice=0;
    this.items.forEach(p=>{
    this.totalPrice=this.totalPrice+p.qt*p.price;
    })
    return this.totalPrice;
    }
}
