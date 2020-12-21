import { CHANGE_DISPLAY_FIELD } from "./constants";

// takes state and action and always returns a new state
const initialState = {
    innerText: ''
}

export const detectSound = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_DISPLAY_FIELD:
            return Object.assign({}, state, {innerText: action.payload});
        default:
            return state;
    }
}