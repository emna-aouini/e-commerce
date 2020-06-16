import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

public url:string="http://localhost:8080/login";

  constructor(private httpClient:HttpClient) { }


  login(email,password){
const headers = new HttpHeaders({'Content-Type': 'application/json'});
 return  this.httpClient.post("http://localhost:8080/authenticate", {email,password},{
       headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text', observe: 'response' });

}

  register(nom,prenom,email,password){
  return this.httpClient.post("http://localhost:8080/register",{nom,prenom,email,password});
  }

  getListAddress(email){
  var par=new HttpParams().set('email',email)
  //alert(par.get('email'));
  return this.httpClient.get("http://localhost:8080/findAddress",{params:new HttpParams().set('email',email)});

}
}
