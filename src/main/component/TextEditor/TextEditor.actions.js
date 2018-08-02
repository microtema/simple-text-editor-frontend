import {push} from "react-router-redux";
import * as Event from '../TextFile/TextFile.constants';
import RestEndpoint from '../../endpoint/Endpoint';

export function saveChanges(data) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.saveChanges(data).then(id => {

            console.info('saveChanges', id);

            dispatch({type: Event.UPDATE, payload: {id: id, fileName: data.fileName, content: data.content}});

            dispatch(push('/'));

        }).catch(error => {
            throw error;
        });
    };
}

export function applyChanges(data) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.saveChanges(data).then(id => {

            data.id = id;

            dispatch({type: Event.UPDATE, payload: data});

        }).catch(error => {
            throw error;
        });
    };
}

export function cancel() {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        dispatch(push('/'));
    };
}