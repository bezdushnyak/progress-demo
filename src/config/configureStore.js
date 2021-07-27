import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import * as apis from "apis";
import rootReducer from "store/rootReducer";
import rootSaga from "store/rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // use redux chrome devtools

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware({
        context: {
            apis,
        },
    });
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
