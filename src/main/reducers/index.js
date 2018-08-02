import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    // short hand property names
    router: routerReducer
    // add more reducer here
});

export default rootReducer;