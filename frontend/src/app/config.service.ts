import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Product} from './model/product.model';

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
    getDataById(url):Observable<any>{
    return this.http.get(url);
    }

}
