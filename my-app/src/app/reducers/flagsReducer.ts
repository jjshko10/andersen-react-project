import { AUTHORIZATION_SUBMIT_FORM, REGISTRATION_SUBMIT_FORM } from "../actions/actionTypes"

const defaultState = {
    isRegistration: false,
    isAuthorization: false
}

export const flagsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION_SUBMIT_FORM: {
            return {
                isRegistration: true
            }
        }
        case AUTHORIZATION_SUBMIT_FORM: {
            return {
                isAuthorization: true
            }
        }
        default: return state
    }
};