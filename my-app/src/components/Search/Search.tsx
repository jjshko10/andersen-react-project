import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import styles from './Search.module.css';

const Search = () => {

    const [ isSearch, setSearch ] = useState(false);
    const [ isRender, setRender ] = useState(false);

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
                    onClick={(event) => {
                        event.preventDefault();
                        setSearch(true);
                    }}
                >
                Go
                </button>
                <button
                    type="submit"
                    className={styles.button}
                    onClick={(event) => {
                        event.preventDefault();
                        setRender(true);
                    }}
                >
                Open all cards
                </button>
            </form>
            <Cards isSearch={isSearch} isRender={isRender} />
        </main>
    )
}

export default Search;