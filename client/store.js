import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"

// import reducers
import { reducer as formReducer } from 'redux-form'

export default function store(initialState) {
    return createStore(
        combineReducers(
            {
                form: formReducer
            }
        ),
        initialState,
        applyMiddleware(thunk)
    );

}