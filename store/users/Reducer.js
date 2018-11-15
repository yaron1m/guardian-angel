import * as actionTypes from './ActionTypes';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_USERS:
            return action.payload;

        default:
            return state;
    }
}

