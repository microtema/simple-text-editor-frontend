import * as Event from './Confirm.constants';

export default function ConfirmReducer(state = {title: '...'}, action) {

    switch (action.type) {
        case Event.SHOW :
            return {...action.payload};
        default:
            return state;
    }
}