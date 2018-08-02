import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {TextFileReducer} from '../component/TextFile';
import {TextEditorReducer} from '../component/TextEditor';

const rootReducer = combineReducers({
    // short hand property names
    TextFileReducer,
    TextEditorReducer,
    router: routerReducer
    // add more reducer here
});

export default rootReducer;