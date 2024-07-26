import { createReducer, on } from "@ngrx/store"
import {setuserrole} from './userdata.action'


export interface user{
    role:string
}


export const initialState: user = {
    role: ''
}

export const  rolereducer = createReducer(
    initialState,
    on(setuserrole, (state, {role}) => ({...state,role:role}))
)