import {
    LOAD_RANDOM_CAT_IMAGE_START,
    LOAD_RANDOM_CAT_IMAGE_SUCCESS,
    LOAD_RANDOM_CAT_IMAGE_FAILED
} from "../types";

export const loading = (state = false, action) => {
    const { type: actionType } = action;

    if (actionType === LOAD_RANDOM_CAT_IMAGE_START) {
        return true;
    }

    if (actionType === LOAD_RANDOM_CAT_IMAGE_SUCCESS || actionType === LOAD_RANDOM_CAT_IMAGE_FAILED) {
        return false;
    }

    return state;
};
