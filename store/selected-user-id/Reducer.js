import * as actionTypes from './ActionTypes';

const initialState = null;

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SELECT_USER_ID:
            return action.payload;

        default:
            return state
    }
}

