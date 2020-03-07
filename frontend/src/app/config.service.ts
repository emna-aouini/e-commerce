import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public host:string="http://localhost:8080/listProduits";

  constructor(private http:HttpClient) { }

    getData(page:number){
   return this.http.get(this.host+'?page='+page);
   }
  saveData(url,data){
  //console.log('saving')
  return this.http.post(url,data);
  }

}
