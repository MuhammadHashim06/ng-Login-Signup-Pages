import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { selectroles } from '../store/userdata.selector';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterLink,AsyncPipe,JsonPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  role$= new Observable();
logout() {
  localStorage.removeItem('user');
}
  currentmenu:any = [];
  role = ''
  constructor(private store:Store<AppState>) {
    this.role$=this.store.select(selectroles)
    var User = JSON.parse(localStorage.getItem('user') || '')
    this.role = User.role

    this.menulist.forEach((m)=>{
      const isrolepresent=m.role.find((role)=>role==this.role)
      if(isrolepresent!=undefined){
        this.currentmenu.push(m)
      }
    })
  }
  menulist = [
    {
      path: 'home',
      text: 'Home',
      role: ['Admin', 'User']
    }, {
      path: 'User',
      text: 'Add User',
      role: ['Admin']
    }, {
      path: 'item',
      text: 'List Item',
      role: ['Admin', 'User']
    }, {
      path: 'bookitem',
      text: 'Book Item',
      role: ['User']
    }, {
      path: 'cart',
      text: 'View Cart',
      role: ['User']
    }, {
      path: 'sales',
      text: 'Total Sales',
      role: ['Admin']
    }
  ]
}
