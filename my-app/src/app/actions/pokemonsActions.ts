import axios from "axios";
import { CARDS_LOADING, CARDS_LOADING_ERROR, CARDS_LOADING_SUCCESS, POKEMON_MULTIPLE_ERROR, POKEMON_MULTIPLE_LOADING, POKEMON_MULTIPLE_SUCCESS } from "./actionTypes";

export const getCards = (page) => async dispatch => {
    try {
        dispatch({
            type: CARDS_LOADING
        });

        const perPage = 15;
        const offset = (page * perPage) - perPage;
        const cards = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

        dispatch({
            type: CARDS_LOADING_SUCCESS,
            payload: cards.data
        });
    } catch (e) {
        dispatch({
            type: CARDS_LOADING_ERROR
        });
    }
};

export const getPokemon = (pokemon) => async dispatch => {
    try {
        dispatch({
            type: POKEMON_MULTIPLE_LOADING
        });

        const cards = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: POKEMON_MULTIPLE_SUCCESS,
            payload: cards.data,
            pokemonName: pokemon
        });
    } catch (e) {
        dispatch({
            type: POKEMON_MULTIPLE_ERROR
        });
    }
};