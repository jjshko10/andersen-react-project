import { fetchCardsReducer } from './fetchCardsReducer';
import { combineReducers } from 'redux';
import { flagsReducer } from './flagsReducer';
import { modalReducer } from './modalReducer';
import { authorizationReducer } from './authorizationReducer';

export const combine = () => 
    combineReducers({
        authorizationReducer,
        modalReducer,
        flagsReducer,
        fetchCardsReducer
    });