import {getSelectedUser} from './Selectors';
import {updateValue} from '../../util/ObjectUpdater';
import {
    CLEAR_SELECTED_USER,
    SELECT_USER,
    UPDATE_SELECTED_USER
} from './ActionTypes';
import {sendDataToDatabase} from '../firebase/Actions';
import {getUserById} from '../users/Selectors';

export function selectUser(userId) {
    return function selectCar(dispatch, getState) {
        const user = getUserById(getState(), userId);
        dispatch({
            type: SELECT_USER,
            payload: user
        })
    };
}

export function updateSelectedUser(key, value) {
    return function updateSelectedOrganization(dispatch, getState) {
        const selectedUser = updateValue(getSelectedUser(getState()), key, value);
        dispatch({
            type: UPDATE_SELECTED_USER,
            payload: selectedUser,
        });
    }
}

export function sendSelectedIUserToDatabase() {
    return async function sendSelectedIUserToDatabase(dispatch, getState) {
        const selectedUser = getSelectedUser(getState());

        return sendDataToDatabase('/users/' + selectedUser.id, selectedUser);
    }
}

export function clearSelectedUser() {
    return {
        type: CLEAR_SELECTED_USER,
    }
}
