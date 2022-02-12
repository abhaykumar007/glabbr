import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
