import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {initFirebase} from './firebase/Actions';
import usersReducer from './users/Reducer';
import selectedUserReducer from './selected-user/Reducer';
import removeWarning from "../util/TimerWarningRemover";

const combinedReducers = combineReducers({
    users: usersReducer,
    selectedUser: selectedUserReducer,
});

const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
);


store.dispatch(initFirebase());

removeWarning();

export default store;