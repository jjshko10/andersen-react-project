import { combineReducers } from 'redux';
import { submitFormReducer } from './submitFormReducer';

export const combine = () => 
    combineReducers({
        submitFormReducer
    });