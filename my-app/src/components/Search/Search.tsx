import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.search}>
            <h1>Search</h1>
            <input className={styles.search__input}></input>
        </div>
    )
}

export default Search;