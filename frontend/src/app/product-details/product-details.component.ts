import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ConfigService}  from '../config.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   public currentProduct:Product;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private configService:ConfigService) { }

  ngOnInit(): void {
  //this.configService.get
  let id=this.activatedRoute.snapshot.params.id;
  let url="http://localhost:8080/listProduits/"+id;
  this.configService.getDataById(url).subscribe(data=>{
  this.currentProduct=data;
  console.log(this.currentProduct);
  },err=>{
  console.log(err);
  })

  }

}
