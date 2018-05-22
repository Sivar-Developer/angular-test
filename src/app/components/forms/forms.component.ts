import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  //name:string="Your first name";
  lname:string="Your last name";
  age:number=0;

  name:string="";
  myShop:string[]=['apple','orange','banana'];

  constructor() { }

  ngOnInit() {
  }

  mySubmit() {
    this.myShop.push(this.name);
    this.name="";
  }

}
