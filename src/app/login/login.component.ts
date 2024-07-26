import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authaervice:AuthService){}
 page = 'login'
  loginUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  signupUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  onlogin() {
    console.log(this.loginUser.value);
    this.authaervice.onlogin(this.loginUser.value)

  }
  onsignup() {
    console.log(this.signupUser.value)
  }
  changeform() {
    if (this.page === 'login') {
      this.page = 'signup'
    } else if (this.page == 'signup') {
      this.page = 'login'
    }
  }
}
