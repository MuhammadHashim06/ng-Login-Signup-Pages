import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const logindata=localStorage.getItem('user')
  return logindata ?  true :  false
};
