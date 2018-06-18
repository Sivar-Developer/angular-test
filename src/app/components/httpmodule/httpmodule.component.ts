import { Component, OnInit } from '@angular/core';
import { HttpmoduleService } from './../../services/httpmodule.service';

@Component({
  selector: 'app-httpmodule',
  templateUrl: './httpmodule.component.html',
  styleUrls: ['./httpmodule.component.css']
})
export class HttpmoduleComponent implements OnInit {

  users: string[] = [];

  constructor(public httpmoduleService: HttpmoduleService) {
    this.httpmoduleService.getPerson().subscribe(data => {
      this.users.push(data);
    });
   }

  ngOnInit() {
  }

}
