import { Component, OnInit } from '@angular/core';
import{ConfigService} from "../config.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  constructor(private configService:ConfigService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(data:any){
  this.configService.saveData(this.configService.host,data)
  .subscribe(res=>{
  console.log(res);
  this.router.navigateByUrl("/corp");
  },err=>{
  console.log(err)}
  )
  }

}
