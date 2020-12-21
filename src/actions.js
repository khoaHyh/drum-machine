import { CHANGE_DISPLAY_FIELD } from './constants';

export const setDisplayField = (sound) => ({
    type: CHANGE_DISPLAY_FIELD,
    payload: sound
})