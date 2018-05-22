import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users:string[];

  constructor(public dataService:DataService) {
    this.users=this.dataService.getUsers();    
   }

  ngOnInit() {
  }

}
