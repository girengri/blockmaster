import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import thunk from "redux-thunk";
import { peliculasReducer } from "../reducers/peliculasReducer";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    movie: peliculasReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
