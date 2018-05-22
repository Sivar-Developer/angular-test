import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  verifyForm = {};
  name:string="";
  lname:string="";
  age:number=0;

  //name:string="";
  myShop:string[]=['apple','orange','banana'];

  constructor() { }

  ngOnInit() {
  }

  // mySubmit() {
  //   this.myShop.push(this.name);
  //   this.name="";
  // }

  mySubmit({value, valid}) {
    if(valid) {
      this.verifyForm=value;
    } else {
      this.verifyForm="Not Valid";
    }
  }

}
