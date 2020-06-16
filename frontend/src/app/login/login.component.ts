import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     creeCompte=false;
     dejaClient=false;
     hoverCreerCompote=false;
     hoverDejaClient=false;
     nom:string;
     prenom:string;
     email:string;
     password:string;
     confirmPassword:string;
     err:string='';
     errregister='';

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  afficheCreerCompte(){
  this.creeCompte=true;
  this.dejaClient=false;
  }

  afficheDejaClient(){
  this.dejaClient=true;
  this.creeCompte=false;
  this.err='';
  }
  onSubmitLogin(){

  this.loginService.login(this.email,this.password).subscribe(res=>{
         //here you received the response of your post
            alert(res.body);

             localStorage.setItem('token' , res.body );
           // localStorage.setItem( 'token' , 'emna_laouini@hotmail.fr' );
            this.router.navigate(['/livraison']);
             },
           (error) => {
             console.log(error.error); // body
             this.err=error.error;
           });
            this.err='';
           }


  onSubmitRegister(){
      this.loginService.register(this.nom,this.prenom,this.email,this.password)
      .subscribe(res=>{

        //  alert(res);
            localStorage.setItem( 'token' , 'emna' );
           // console.log(res);



     },
     (err)=>{
        console.log(err);
        this.errregister=err.error.message;
     })
       this.errregister='';
     }
  afficheLivraisonPointRelais(){
  }

 }
