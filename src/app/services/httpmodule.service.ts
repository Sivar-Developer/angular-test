import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';   //  npm install rxjs@6 rxjs-compat@6 --save

@Injectable({
  providedIn: 'root'
})
export class HttpmoduleService {

  constructor(public http: Http) {
   }

  getPerson() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(res => res.json());
  }

  addPerson(user) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user)
    .map(res => res.json());
  }

  deletePerson(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id)
    .map(res => res.json());
  }

  editPerson(user) {
    return this.http.put('https://jsonplaceholder.typicode.com/users/' + user.id, user)
    .map(res => res.json());
  }


}
