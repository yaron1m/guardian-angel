import * as actionTypes from './ActionTypes';
import {sendDataToDatabase} from '../firebase/Actions';
import _ from 'lodash';
import {getUsers} from './Selectors';
import {calcDistance} from '../../util/DistanceUtil';

export function receiveUsers(users) {
    return {
        type: actionTypes.RECEIVE_USERS,
        payload: users,
    };
}

export function setIsUserLost(userId, isLost) {
    sendDataToDatabase(`/users/${userId}/isLost`, isLost);
}

export function calculateLostPeople() {
    return function calculateLostPeople(dispatch, getState) {
        const allUsers = getUsers(getState());
        const users = _.filter(allUsers, x => x.type === 'user' && !x.isLost)

        _.map(users, user => {
            if (!user.knownLocations)
                return;

            for (const locationId in user.knownLocations) {
                const location = user.knownLocations[locationId];
                const distance = calcDistance(
                    user.location.lat,
                    user.location.long,
                    location.lat,
                    location.long
                );

                if (distance < user.allowedDistance)
                    return;
            }

            setIsUserLost(user.id, true);

            dispatch(userIsLost(user.id));
        })
    }
}

function userIsLost(userId) {
    return function userIsLost(dispatch, getState) {

    }
}