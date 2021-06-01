import { POKEMON_MULTIPLE_ERROR, POKEMON_MULTIPLE_LOADING, POKEMON_MULTIPLE_SUCCESS } from "app/actions/actionTypes";

const defaultState = {
    loading: false,
    data: {},
    error: ''
};

export const pokemonMultipleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case POKEMON_MULTIPLE_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case POKEMON_MULTIPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                },
                error: ''
            }
        case POKEMON_MULTIPLE_ERROR:
            return {
                ...state,
                loading: false,
                error: 'unable to find pokemon'
            }
        default: return state
    }
};