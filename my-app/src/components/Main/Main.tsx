import Cards from './Cards/Cards';
import styles from './Main.module.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon';

const Search = () => {

    return (
        <main className={styles.search}>
            <h1>Search</h1>
            <form>
                <input
                    placeholder="Enter pokemon's name"
                    className={styles.search__input}
                />
            </form>
            <nav>
                <NavLink to={"/"} className={styles.link}>Find</NavLink>
            </nav>
            <Switch>
                <Route path={"/"} exact component={Cards} />
                <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
                <Redirect to={"/"} />
            </Switch>
            
        </main>
    )
}

export default Search;