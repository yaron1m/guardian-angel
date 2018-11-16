import _ from 'lodash';

export function getUsers(state) {
    return state.users;
}

export function getUserById(state, userId) {
    return getUsers(state)[userId];
}

export function getLostPeople(state) {
    const allUsers = getUsers(state);

    return _.filter(allUsers, x => x.type === 'user' && x.isLost);
}

export function getGuardianAngels(state) {
    const allUsers = getUsers(state);

    return _.filter(allUsers, x => x.type === 'guardianAngel');
}