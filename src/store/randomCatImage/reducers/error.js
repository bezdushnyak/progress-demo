import {
    LOAD_RANDOM_CAT_IMAGE_FAILED,
    LOAD_RANDOM_CAT_IMAGE_START
} from "../types";

export const error = (state = null, action) => {
    const { type: actionType } = action;

    if (actionType === LOAD_RANDOM_CAT_IMAGE_START) {
        return null;
    }

    if (actionType === LOAD_RANDOM_CAT_IMAGE_FAILED) {
        return action.payload.error;
    }

    return state;
};
