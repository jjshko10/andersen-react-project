import { CLOSE_MODAL, OPEN_MODAL } from "../actions/actionTypes"

const defaultState = {
    isModalActive: false
}

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                isModalActive: true,
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isModalActive: false
            }
        }
        default: return state
    }
};