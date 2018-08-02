import {push} from "react-router-redux";
import * as Event from '../TextFile/TextFile.constants';
import RestEndpoint from '../../endpoint/Endpoint';

export function saveChanges(data) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.saveChanges(data).then(response => {

            if (response.status === 500) {

                alert(response.message);

                return;
            }

            dispatch({type: Event.UPDATE, payload: {id: response, fileName: data.fileName, content: data.content}});

            dispatch(push('/'));

        }).catch(error => {
            throw error;
        });
    };
}

export function applyChanges(data) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.saveChanges(data).then(response => {

            if (response.status === 500) {

                alert(response.message);

                return;
            }

            data.id = response;

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