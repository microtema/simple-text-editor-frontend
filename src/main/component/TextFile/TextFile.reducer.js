import * as Event from './TextFile.constants';

export default function TextFileReducer(state = {entries: []}, action) {

    switch (action.type) {
        case Event.QUERY :
            return {entries: action.payload};
        case Event.UPDATE :

            let entries = [...state.entries];

            entries.push(action.payload);

            return {entries: entries};
        case Event.REMOVE :

            return {entries: [...state.entries.filter(it => it.id !== action.payload)]};
        default:
            return state;
    }
}