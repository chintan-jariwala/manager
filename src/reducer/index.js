import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import NavigationReducer from "./NavigationReducer";

const AppReducer = combineReducers({
    auth: AuthReducer,
    nav: NavigationReducer
});

export default AppReducer;