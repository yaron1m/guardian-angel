import {SELECT_USER_ID} from './ActionTypes';

export function selectUser(userId) {
    return {
        type: SELECT_USER_ID,
        payload: userId
    };
}