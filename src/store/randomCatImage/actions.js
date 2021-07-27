import {
    LOAD_RANDOM_CAT_IMAGE,
    LOAD_RANDOM_CAT_IMAGE_START,
    LOAD_RANDOM_CAT_IMAGE_PROGRESS,
    LOAD_RANDOM_CAT_IMAGE_SUCCESS,
    LOAD_RANDOM_CAT_IMAGE_FAILED,
} from "./types";

export const loadRandomCatImage = () => ({
   type: LOAD_RANDOM_CAT_IMAGE,
});

export const loadRandomCatImageStart = () => ({
    type: LOAD_RANDOM_CAT_IMAGE_START
});

export const loadRandomCatImageProgress = (progress) => ({
    type: LOAD_RANDOM_CAT_IMAGE_PROGRESS,
    payload: {
        progress,
    }
});

export const loadRandomCatImageSuccess = (img) => ({
    type: LOAD_RANDOM_CAT_IMAGE_SUCCESS,
    payload: {
        img,
    }
});

export const loadRandomCatImageFailed = (error) => ({
    type: LOAD_RANDOM_CAT_IMAGE_FAILED,
    payload: {
        error,
    }
});