import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  users=[
    {
      "id": 1,
      "email": "admin",
      "password": "admin123",
      "role":'Admin'
    },    {
      "id": 2,
      "email": "user",
      "password": "user123",
      "role":'User'
    },
  ]
  onlogin(logindata:any){
    debugger;
    console.log(logindata);
    
    let user=this.users.find((user:any)=>user.email===logindata.email && user.password==logindata.password)
    if(user){
      localStorage.setItem('user',JSON.stringify(user))
      return true
    }else {return false}
  }
}
