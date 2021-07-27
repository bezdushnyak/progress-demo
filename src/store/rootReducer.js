import { combineReducers } from "redux";

import { randomCatImage } from "./randomCatImage/reducer";

const rootReducer = combineReducers({
    randomCatImage
});

export default rootReducer;
