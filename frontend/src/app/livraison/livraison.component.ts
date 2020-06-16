    import { Component, OnInit } from '@angular/core';
    import {LoginService} from '../login.service';
    import * as jwt_decode from 'jwt-decode';
    import {Product} from '../model/product.model';

    @Component({
      selector: 'app-livraison',
      templateUrl: './livraison.component.html',
      styleUrls: ['./livraison.component.css']
    })
    export class LivraisonComponent implements OnInit {
       hoverLivraisonDomicile=false;
       hoverLivraisonPointRelais=false;
       livraisonDomicile=false;
       livraisonPointRelais=false;
       afficheListAddress=false;
       listAddress;
       x;
       societe:String;
       adresse1:String;
       adresse2:String;
       codePostal:String;
       ville:String;

      //public currentProduct:Product;
      constructor(private loginservice:LoginService) { }

      ngOnInit(): void {
      }

      /*parseJwt (token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          return JSON.parse(jsonPayload);
      }*/
      afficheLivraisonDomicile(){
      this.afficheListAddress=true;
      this.hoverLivraisonDomicile=true;

        var token=localStorage.getItem('token');
     // var token=jwt_decode(localStorage.getItem('token'));
        var tokens = token.split(".");// tokens is a table

       alert(atob(tokens[0]));

       var email=JSON.parse(atob(token.split('.')[1])).sub;
      // alert(email);
       //alert(token)
      this.loginservice.getListAddress(email).subscribe(res=>{
      // alert(typeof(res)); de type object

        alert(JSON.stringify(res));
        //alert(typeof(JSON.stringify(res)));
        this.x=JSON.parse(JSON.stringify(res));
       // alert(JSON.stringify(x.adress));
        this.listAddress=this.x.adress;
      },(error)=>{
        alert(error);
      })

      }
      afficheLivraisonPointRelais(){
      }
      showModal(){
      }

        ajouterAdress(){
          alert(this.societe+" "+this.adresse1);
          }


    }
