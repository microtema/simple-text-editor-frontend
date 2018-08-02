import {push} from "react-router-redux";
import * as Event from '../TextFile/TextFile.constants';
import RestEndpoint from '../../endpoint/Endpoint';

export function saveChanges(data) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.saveChanges(data).then(response => {

            if (isErrorResponse(response)) {
                dispatch({type: response.status, payload: response});
            } else {
                dispatch({
                    type: 200,
                    payload: {
                        status: 200,
                        message: 'Text File <b>' + data.fileName + '</b> successful saved',
                        name: 'Editor'
                    }
                });

                dispatch({type: Event.UPDATE, payload: {id: response, fileName: data.fileName, content: data.content}});

                dispatch(push('/'));
            }

        }).catch(error => {
            throw error;
        });
    };
}

export function applyChanges(data) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.saveChanges(data).then(response => {

            if (isErrorResponse(response)) {
                dispatch({type: response.status, payload: response});
            } else {
                dispatch({
                    type: 200,
                    payload: {
                        status: 200,
                        message: 'Text File <b>' + data.fileName + '</b> successful updated',
                        name: 'Editor'
                    }
                });

                data.id = response;

                dispatch({type: Event.UPDATE, payload: data});
            }

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

function isErrorResponse(response) {

    return (response.status > 300 && response.status <= 500);
}