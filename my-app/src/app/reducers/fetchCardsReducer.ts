import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "../actions/actionTypes";

const defaultState = {
    cards: []
};

export const fetchCardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return state
        case FETCH_SUCCESS: {
            return {
                ...state,
                cards: action.payload
            }
        }
        case FETCH_ERROR:
            return state
        default: return state
    }
};