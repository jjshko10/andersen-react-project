import { ERROR_SUBMIT, SUBMIT_FORM } from "./actionTypes"

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