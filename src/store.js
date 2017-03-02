import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import * as reducers from './ducks';

export default(initialState) => {
    return createStore(
            combineReducers({
                ...reducers,
                routing: routerReducer
            },
            initialState
        ),
        applyMiddleware(thunk)
    );
}
