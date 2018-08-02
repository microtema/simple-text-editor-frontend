import * as Event from "./Messaging.constants";

export default function MessagingReducer(state = {message: {}}, action) {

    switch (action.type) {
        case 200 : //success
        case 300 : //info
        case 401 : //error
        case 403 : //warn
        case 500 : //error
            return {message: action.payload};
        case Event.DISMISS :
            return {message: {name: action.payload.name, dismiss: true}};
        default:
            return state;
    }
}