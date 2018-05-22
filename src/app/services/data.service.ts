import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Observable<any>; 

  constructor() { }

   getUsers() {
     this.data = new Observable(observer=>{
      setTimeout(()=>{
        observer.next('Sivar Sarkawt');
      },1000);

      setTimeout(()=>{
        observer.next('Sivan Sarkawt');
      },2000);
      
      setTimeout(()=>{
        observer.next('Savan Sarkawt');
      },3000);

      setTimeout(()=>{
        observer.next('Sia Sarkawt');
      },4000);

      setTimeout(()=>{
        observer.next('Sazan Qadir');
      },5000);

      setTimeout(()=>{
        observer.next('Sarkawt Mahmood');
      },6000);
     });

     return this.data;

   }

//   users:string[]=[];
//   this.users = ['Sivar','Sivan','Savan','Sia'];
//   return this.users;
   
   
}
