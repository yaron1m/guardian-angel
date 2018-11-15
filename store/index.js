import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './users/Reducer';
import {initFirebase} from './firebase/Actions';

const combinedReducers = combineReducers({
    users: usersReducer,
});

const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
);

store.dispatch(initFirebase());

export default store;