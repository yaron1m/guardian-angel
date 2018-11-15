export function getUsers(state) {
    return state.users;
}

export function getUserById(state, userId){
    return getUsers(state)[userId];
}