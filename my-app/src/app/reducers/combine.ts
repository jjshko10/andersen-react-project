import { modalReducer } from './modalReducer';
import { combineReducers } from 'redux';
import { submitFormReducer } from './submitFormReducer';

export const combine = () => 
    combineReducers({
        submitFormReducer,
        modalReducer
    });