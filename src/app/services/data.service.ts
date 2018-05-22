import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:string[]=[];

  constructor() {
    this.users = ['Sivar','Sivan','Savan','Sia'];
   }

   getUsers() {
     return this.users;
   }
}
