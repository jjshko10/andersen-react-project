import styles from './Search.module.css';

const Search = () => {
    return (
        <main className={styles.search}>
            <h1>Search</h1>
            <div>
                <input placeholder="Enter pokemon's name" className={styles.search__input}></input>
                <button className={styles.button}>Go</button>
            </div>
        </main>
    )
}

export default Search;