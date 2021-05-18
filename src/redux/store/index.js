import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {logger} from 'redux-logger'
import rootReducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware,logger))
)
export default store;