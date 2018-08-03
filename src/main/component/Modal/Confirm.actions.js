import * as Event from './Confirm.constants';

export function confirm(data) {

    return function (dispatch) {

        return new Promise(function (resolve) {
            dispatch({type: Event.SHOW, payload: data});
            resolve(data);
        });
    };
}