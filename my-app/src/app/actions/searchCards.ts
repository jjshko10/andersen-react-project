import { SEARCH_CARDS } from "./actionTypes";

export const searchCards = (payload) => {
    return {
        type: SEARCH_CARDS,
        payload
    }
};