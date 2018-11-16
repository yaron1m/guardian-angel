import {getUserById} from '../users/Selectors';

export function getSelectedUser(state) {
    const userId = state.selectedUserId;
    console.log(userId);
    if(userId == null) return {};
    return getUserById(state, userId);

}
