import { combineReducers } from 'redux';
import userReducer from './modules/user/reducers';
import loadingReducer from './modules/loading/reducers';



const rootReducer = combineReducers({
    userReducer,
    loadingReducer
})

export default rootReducer;