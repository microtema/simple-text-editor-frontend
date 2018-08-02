import * as Event from './TextFile.constants';
import * as TextEditorEvent from '../TextEditor/TextEditor.constants';
import RestEndpoint from '../../endpoint/Endpoint';
import {push} from "react-router-redux";

export function loadEntries() {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.loadEntries().then(entries => {
            dispatch({type: Event.QUERY, payload: entries});
        }).catch(error => {
            throw error;
        });
    };
}

export function createEntry() {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        dispatch({
            type: TextEditorEvent.QUERY,
            payload: {
                fileName: 'file-' + Math.random().toString(36).substr(2, 9) + '.txt',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
        });

        dispatch(push('/editor'));
    };
}