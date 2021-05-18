import {combineReducers} from 'redux'
import {getPatients} from './patientsReducer'
const rootReducer = combineReducers({
  patients:getPatients
})
export default rootReducer