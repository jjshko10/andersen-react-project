import { ERROR_SUBMIT, SUBMIT_FORM } from '../actions/actionTypes';

const defaultState = {
    currentUser: {},
    isAuth: false,
    isErrorRegistration: ''
};

export const submitFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUBMIT_FORM: {
            return {
                ...state,
                currentUser: {...action.payload},
                isAuth: true
            }
        }
        case ERROR_SUBMIT: {
            return {
                ...state,
                isErrorRegistration: 'Wrong login or password!'
            }
        }
        default: return state
    }
};