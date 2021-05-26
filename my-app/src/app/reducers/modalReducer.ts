import { OPEN_MODAL } from "../actions/actionTypes"

const defaultState = {
    modalActive: false,
    setModalActive: false
}

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                modalActive: true,
                setModalActive: true
            }
        }
        default: return state
    }
};