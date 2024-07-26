import { createAction,props } from "@ngrx/store";


export const setuserrole = createAction('set user role',props<{role:string}>())