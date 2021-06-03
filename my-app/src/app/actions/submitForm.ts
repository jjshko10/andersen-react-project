import { AUTHORIZATION_SUBMIT_FORM, ERROR_SUBMIT, EXIT_FROM_ACCOUNT, REGISTRATION_SUBMIT_FORM, SUBMIT_FORM } from "./actionTypes"

export interface iPayload {
    login: string;
    password: string;
};

export const errorSubmit = () => {
    return {
        type: ERROR_SUBMIT
    }
};

export const submitForm = (payload:iPayload) => {
    return {
        type: SUBMIT_FORM,
        payload
    }
};

export const registrationSubmitForm = (payload:boolean) => {
    return {
        type: REGISTRATION_SUBMIT_FORM,
        payload
    }
};

export const authorizationSubmitForm = (payload:boolean) => {
    return {
        type: AUTHORIZATION_SUBMIT_FORM,
        payload
    }
};

export const exitFromAccount = () => {
    return {
        type: EXIT_FROM_ACCOUNT
    }
};