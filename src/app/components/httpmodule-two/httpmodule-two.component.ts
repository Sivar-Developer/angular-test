import { Component, OnInit } from '@angular/core';
import { HttpmoduleService } from './../../services/httpmodule.service';

@Component({
  selector: 'app-httpmodule-two',
  templateUrl: './httpmodule-two.component.html',
  styleUrls: ['./httpmodule-two.component.css']
})
export class HttpmoduleTwoComponent implements OnInit {

  users: any[];
  user = {
    name: '',
    username: '',
    email: ''
  };

  constructor(public dataService: HttpmoduleService) {
    this.dataService.getPerson().subscribe(users => {
      this.users = users;
    });
   }

  mySubmit() {
    this.dataService.addPerson(this.user).subscribe(user => {
      this.users.unshift(user);
    });
  }

  deleteItem(id) {
    this.dataService.deletePerson(id).subscribe(res => {
      // console.log(res);
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1);
        }
      }
    });
  }

  ngOnInit() {
  }

}
