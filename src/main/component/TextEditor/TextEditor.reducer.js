import * as Event from './TextEditor.constants';

export default function TextEditorReducer(state = {data: {}}, action) {

    switch (action.type) {
        case Event.QUERY :
            return {data: action.payload};
        case Event.UPDATE :
            return {data: action.payload};
        default:
            return state;
    }
}