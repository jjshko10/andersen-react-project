import { ERROR_SUBMIT, EXIT_FROM_ACCOUNT, SUBMIT_FORM } from '../actions/actionTypes';

const defaultState = {
    currentUser: {},
    isAuth: false,
    isErrorRegistration: ''
};

export const authorizationReducer = (state = defaultState, action) => {
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
        case EXIT_FROM_ACCOUNT: {
            return defaultState
        }
        default: return state
    }
};