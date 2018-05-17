import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sivar',
  templateUrl: './sivar.component.html',
  styleUrls: ['./sivar.component.css']
})
export class SivarComponent implements OnInit {

  name:string="Seever";
  lname:string="Sarkawt";
  age:number=23;
  isEmployee:boolean=true;
  address:any;
  names:string[];
  ages:number[];
  age1:[string,number];
  employee={name: 'Balen', lname: 'Dlzar', age:23}

  constructor() {
    //this.name="Sivar";
    this.changeName()
    this.isEmployee=false
   }

  ngOnInit() {
    this.age=16;
    this.changeAge()
    this.address=["Hawler", " Majid Mall", 1,2,3,4]
    this.names=['sivar','sivan','savan']
    this.ages=[1,2,3,4,5,6]
    this.age1=['Sivar',23]
  }

  changeName() {
    this.name="Savan";
  }

  changeAge() {
    this.age=20;
  }

}
