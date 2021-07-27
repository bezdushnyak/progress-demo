import {
    LOAD_RANDOM_CAT_IMAGE_START,
    LOAD_RANDOM_CAT_IMAGE_SUCCESS,
} from "../types";

export const img = (state = null, action) => {
    const { type: actionType } = action;

    if (actionType === LOAD_RANDOM_CAT_IMAGE_START) {
        return null;
    }

    if (actionType === LOAD_RANDOM_CAT_IMAGE_SUCCESS) {
        return action.payload.img;
    }

    return state;
};
