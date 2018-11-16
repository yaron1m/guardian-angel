import * as actionTypes from './ActionTypes';
import {sendDataToDatabase} from '../firebase/Actions';

export function receiveUsers(users) {
    return {
        type: actionTypes.RECEIVE_USERS,
        payload: users,
    };
}

export function setIsUserLost(userId, isLost) {
    sendDataToDatabase(`/users/${userId}/isLost`, isLost);
}

export function updateUserLocation(userId, location) {
    sendDataToDatabase(`/users/${userId}/location`, location);
}