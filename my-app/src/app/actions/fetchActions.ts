import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes"

export const fetchCardsRequest = () => {
    return {
        type: FETCH_REQUEST
    }
};

export const fetchCardsSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload
    }
};

export const fetchCardsError = () => {
    return {
        type: FETCH_ERROR
    }
};