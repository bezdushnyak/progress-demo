import {
    LOAD_RANDOM_CAT_IMAGE_START,
    LOAD_RANDOM_CAT_IMAGE_PROGRESS
} from "../types";

export const progress = (state = null, action) => {
    const { type: actionType } = action;

    if (actionType === LOAD_RANDOM_CAT_IMAGE_START) {
        return null;
    }

    if (actionType === LOAD_RANDOM_CAT_IMAGE_PROGRESS) {
        return action.payload.progress;
    }

    return state;
};
