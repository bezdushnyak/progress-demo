import { put, take, takeEvery, call, fork, getContext } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { LOAD_RANDOM_CAT_IMAGE } from './types';
import {
    loadRandomCatImageStart,
    loadRandomCatImageProgress,
    loadRandomCatImageSuccess,
    loadRandomCatImageFailed,
} from './actions';

function createLoader(loadFn) {
    let emit;
    const chan = eventChannel((emitter) => {
        emit = emitter;
        return () => {};
    });
    const loadProgressCb = (progress) => {
        const { total, loaded } = progress;
        emit(progress);
        if (total === loaded) emit(END);
    };
    const loadPromise = loadFn(loadProgressCb);
    return [loadPromise, chan];
}

function* loadProgressWatcher(chan) {
    while (true) { // eslint-disable-line no-constant-condition
        const progress = yield take(chan);
        yield put(loadRandomCatImageProgress(progress));
    }
}

function* loadRandomCatImageSaga() {
    yield put(loadRandomCatImageStart());
    try {
        const { catImageApi } = yield getContext("apis");
        const [loadPromise, chan] = yield call(createLoader, catImageApi.loadLargeCatImg);
        yield fork(loadProgressWatcher, chan);
        const res = yield call(() => loadPromise);
        yield put(loadRandomCatImageSuccess(res));
    } catch (e) {
        yield put(loadRandomCatImageFailed(e));
    }
}

export function* randomCatImageSaga() {
    yield takeEvery(LOAD_RANDOM_CAT_IMAGE, loadRandomCatImageSaga);
}