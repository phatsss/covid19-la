import {GET_PATIENTS} from '../types/patientsType'
export const getPatientsAction = (data) =>{
    return{
       type:GET_PATIENTS,
       payload:data
    }
   }