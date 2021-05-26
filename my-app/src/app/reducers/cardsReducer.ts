import { SEARCH_CARDS } from "../actions/actionTypes"

const defaultState = {
    cards: []
}

export const cardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_CARDS: {
            return {
                ...state,
                cards: [action.payload]
            }
        }
        default: return state
    }
};