import {combineReducers, createStore} from "redux";
import calcReducer from "./reducers/calc-reducer";

let reducers = combineReducers({
    calc: calcReducer
});

let store = createStore(reducers);

export default store;