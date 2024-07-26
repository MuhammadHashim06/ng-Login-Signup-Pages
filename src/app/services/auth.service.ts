import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setuserrole } from '../store/userdata.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>) { }
  users = [
    {
      "id": 1,
      "email": "admin",
      "password": "admin123",
      "role": 'Admin'
    }, {
      "id": 2,
      "email": "user",
      "password": "user123",
      "role": 'User'
    },
  ]
  onlogin(logindata: any) {
    let user = this.users.find((user: any) => user.email === logindata.email && user.password == logindata.password)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      this.store.dispatch(setuserrole({role:user.role}))
      return true
    } else { return false }
  }
}
