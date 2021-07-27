import { combineReducers } from "redux";

import { loading } from "./reducers/loading";
import { error } from "./reducers/error";
import { progress } from "./reducers/progress";
import { img } from "./reducers/img";

export const randomCatImage = combineReducers({
    loading,
    error,
    progress,
    img
});
