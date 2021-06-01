import { CARDS_LOADING, CARDS_LOADING_ERROR, CARDS_LOADING_SUCCESS } from "../actions/actionTypes";


const defaultState = {
    loading: false,
    data: [],
    error: '',
    count: 0,
};

export const cardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CARDS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case CARDS_LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                error: '',
                count: action.payload.count
            }
        case CARDS_LOADING_ERROR:
            return {
                ...state,
                loading: true,
                error: 'impossible to get pokemon'
            }
        default: return state
    }
};