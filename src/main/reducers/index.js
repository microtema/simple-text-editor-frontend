import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {TextFileReducer} from '../component/TextFile';
import {TextEditorReducer} from '../component/TextEditor';
import MessagingReducer from '../component/Messaging/Messaging.reducer';

const rootReducer = combineReducers({
    // short hand property names
    TextFileReducer,
    TextEditorReducer,
    MessagingReducer,
    router: routerReducer
    // add more reducer here
});

export default rootReducer;