import { Component, OnInit } from '@angular/core';
import { Persons } from './Persons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Persons;
  persons: Persons[];

  constructor() {
    this.person = {
      id: 22,
      name: 'Sivar',
      lname: 'Sarkawt',
      age: 23
    },
    this.persons = [{
      id: 16,
      name: 'Sarkawt',
      lname: 'Sarkawt',
      age: 16
    },
    {
      id: 16,
      name: 'Sia',
      lname: 'Sarkawt',
      age: 16
    },
    {
      id: 16,
      name: 'Sazan',
      lname: 'Sarkawt',
      age: 16
    },
    {
      id: 16,
      name: 'Savan',
      lname: 'Sarkawt',
      age: 16
    }];
  }

  ngOnInit() {
  }

}
