import {getUserById} from '../users/Selectors';

export function getSelectedUser(state) {
    const userId = state.selectedUserId;

    if (userId == null)
        return {};

    return getUserById(state, userId);

}
