import { Component } from '@angular/core';
import { NgModule  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientcommerce';
  comments=[];
  comment={date:null,message:''};
  newComment=false;

addComment(){
if(this.comment.message!=''){
this.comment.date=new Date();
this.comments.push({
date:this.comment.date,
message:this.comment.message
});
this.comment.message='';
}
}

}
