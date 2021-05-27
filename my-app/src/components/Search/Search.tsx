import { useDispatch } from 'react-redux';
import styles from './Search.module.css';

const Search = () => {

    const dispatch = useDispatch();

    const renderCards = (event) => {
        console.log('hello');
        event.preventDefault();
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
                    onClick={event => renderCards(event)}
                >
                Go
                </button>
            </form>
        </main>
    )
}

export default Search;