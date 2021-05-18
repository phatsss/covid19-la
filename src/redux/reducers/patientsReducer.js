import {
  GET_PATIENTS,
  GET_PATIENTS_LOADING,
  GET_PATIENTS_ERR
} from '../types/patientsType'
const patientState = {
  patients:[],
  loading:false,
  err:''
}

export const getPatients =  (state = patientState, action) => {
    switch (action.type) {
      case GET_PATIENTS:
        return {
          ...state,
          patients: action.payload,
          loading: false,
          err:''
        };
      case GET_PATIENTS_LOADING:
        return {
          ...state,
          loading:action.loading
        }
      case GET_PATIENTS_ERR:
        return {
          ...state,
          err:action.err
        }
      default:
        return state;
    }
  };