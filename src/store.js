/*
    Estrucutura base:
        1. Se importa el index de reducer en donde estan todos los reducers.
        2. Se importan (createStore, applyMiddleware, compose) para crear el store.
        3. Se importa thunk (opcional).
*/

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;