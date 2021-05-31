import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchCardsError, fetchCardsRequest, fetchCardsSuccess } from '../../app/actions/fetchActions';
import Cards from '../Cards/Cards';
import styles from './Search.module.css';

const Search = () => {

    const [ isSearch, setSearch ]= useState(false);
    
    
    const mapStateToProps = function (state) {
        return {
            cards: state.cards
        }
    };

    const getCards = async () => {
        const api = await fetch('https://pokeapi.co/api/v2/pokemon');
        const content = await api.json();
        const pokemons = content.results;
        console.log(pokemons);
        return pokemons;
    };

    const renderCards = (event) => {
        event.preventDefault();
        console.log(event);

        return (dispatch) => {
            dispatch(fetchCardsRequest());
                return getCards().then(([response, json]) => {
                    if(response.status === 200) {
                        dispatch(fetchCardsSuccess(json))
                    }
                    else {
                        dispatch(fetchCardsError())
                    }
                })
            };

    };

    return (
        <main className={styles.search}>
            <h1>Search</h1>
            <form>
                <input
                    placeholder="Enter pokemon's name"
                    className={styles.search__input}
                />
                <button
                    type="submit"
                    className={styles.button}
                    onClick={() => setSearch(true)}
                >
                Go
                </button>
                <button
                    type="submit"
                    className={styles.button}
                    onClick={event => renderCards(event)}
                >
                Open all cards
                </button>
            </form>
            <Cards isSearch={isSearch} />
        </main>
    )
}

export default Search;