import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import shop from "./component/shop/reducer"

export default function store(initialState) {


    return createStore(
        combineReducers({
            shop
        }),
        initialState,
        applyMiddleware(thunk)
    );

}