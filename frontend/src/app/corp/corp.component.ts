import { Component, OnInit } from '@angular/core';
import{ConfigService} from '../config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-corp',
  templateUrl: './corp.component.html',
  styleUrls: ['./corp.component.css']
})
export class CorpComponent implements OnInit {
task;
searchText;
 public page:number=0;
public pages:Array<number>;

  constructor(private configService:ConfigService,private router:Router) { }

  ngOnInit(): void {
    this.getContries();
  }
  getContries(){
   this.configService.getData(this.page).subscribe(data=>{
   console.log('total pages'+data['totalPages']);
    console.log(data['content']);

    this.pages=new Array(data['totalPages']);
    this.task=data['content'];
    },
    err=>{

    this.router.navigateByUrl('/');
    })
  }
  changeNumPage(i,event){
  event.preventDefault();
  this.page=i;
  this.getContries();}
  onDeleteProduct(p){
  let conf=confirm("Etes vous sure?");
  if(conf)
  console.log(p);
  }

  Search(){
  if(this.searchText!==""){
  this.task=this.task.filter(res=>{
    return res.titre.toLowerCase().match(this.searchText.toLowerCase());
    })
  }else{

  this.ngOnInit();
  }


  }

}
