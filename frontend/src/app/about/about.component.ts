import { Component, OnInit } from '@angular/core';
import{ConfigService} from "../config.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info={
   nom:"Aouini",
   prenom:"Emna",
   email:"emna.laouini.8@gmail.com",
   tel:"0669874"
  }
  constructor(private configService:ConfigService) { }


  ngOnInit(): void {
  }

}
