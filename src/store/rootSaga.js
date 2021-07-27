import { spawn } from "redux-saga/effects";
import { randomCatImageSaga } from "store/randomCatImage/saga";

export default function* rootSaga() {
    yield spawn(randomCatImageSaga);
}
