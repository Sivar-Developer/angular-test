import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users:any[]=[];

  constructor(public dataService:DataService) {
      this.dataService.getUsers().subscribe(data=>{
        this.users.push(data);
      });
   }

  ngOnInit() {
  }

  // this.users=this.dataService.getUsers();  

}
