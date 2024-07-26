import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authaervice: AuthService) { }
  router = inject(Router)
  page = 'login'
  loginUser = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  signupUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  onlogin() {
    console.log(this.loginUser.value);
    const flag = this.authaervice.onlogin(this.loginUser.value)

    flag ? this.router.navigateByUrl('home') : alert('User not Found check details')

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
