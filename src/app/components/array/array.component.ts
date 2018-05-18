import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  suname='Sivar Sarkawt';
  sultan:boolean=true;
  myNumber:number=600;
  myClassCss:boolean=false;
  myClassCss2:boolean=true;
  birthday:date= new Date(1995, 6, 6);
  mySalary=4000;
  Rate=44.54;
  totalClass={}
  classFunction(){
    this.totalClass{
      this.myClassCss=true,
      this.myClassCss2=true
    }
  }
  myImage:string="http://via.placeholder.com/350x150/0000/0000";
  people=['sivar','sarkawt','mahmood'];
  jobs=['Developer','IT','Security'];
  plang=[
    {
      languageName:'Javascript',
      shortcut:'JS',
      city:'Hawler'
    },
    {
      languageName:'Angular',
      shortcut:'ng',
      city:'Erbil'
    },
    {
      languageName:'Pythong',
      shortcut:'Py',
      city:'Slemani'
    },
    {
      languageName:'Ruby',
      shortcut:'Rb',
      city:'Anywhere'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
