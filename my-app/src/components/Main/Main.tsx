import Cards from './Cards/Cards';
import styles from './Main.module.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pokemon from './Pokemon/Pokemon';


const Main = () => {

    return (
        <main className={styles.search}>
            <div className={styles.content}>
                <Switch>
                    <Route path={"/"} exact component={Cards} />
                    <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
                    <Redirect to={"/"} />
                </Switch>
            </div>   
        </main>
    )
}

export default Main;