import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {TextFileReducer} from '../component/TextFile';
import {TextEditorReducer} from '../component/TextEditor';
import {MessagingReducer} from '../component/Messaging';
import {ConfirmReducer} from "../component/Modal";

const rootReducer = combineReducers({
    // short hand property names
    TextFileReducer,
    TextEditorReducer,
    MessagingReducer,
    ConfirmReducer,
    router: routerReducer
    // add more reducer here
});

export default rootReducer;