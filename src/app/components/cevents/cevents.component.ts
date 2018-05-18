import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevents',
  templateUrl: './cevents.component.html',
  styleUrls: ['./cevents.component.css']
})
export class CeventsComponent implements OnInit {

  myname='Sivar Sarkawt';
  check=true;

  constructor() { }

  ngOnInit() {
  }

  myClick() {
    this.check=!this.check;
    this.myname=this.myname+1
  }

}
