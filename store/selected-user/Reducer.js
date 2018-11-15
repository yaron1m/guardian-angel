import * as actionTypes from './ActionTypes';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SELECT_USER:
        case actionTypes.UPDATE_SELECTED_USER:
            return action.payload;

        case actionTypes.CLEAR_SELECTED_USER:
            return initialState;

        default:
            return state
    }
}

