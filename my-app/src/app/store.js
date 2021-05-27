import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combine } from './reducers/combine';

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composedEnchanters = composeFunc(applyMiddleware(thunk));

export const getCards = async () => {
    const api = await fetch('https://pokeapi.co/api/v2/pokemon');
    const content = await api.json();
    const cards = content.results;
    return cards;
};

export const store = createStore(combine(), composedEnchanters);