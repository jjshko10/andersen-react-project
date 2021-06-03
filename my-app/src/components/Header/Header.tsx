import { useSelector } from "react-redux";
import logo from "../../images/pokemons.png";
import Exit from "./Exit/Exit";
import styles from "./Header.module.css";
import SignIn from "./Sign In/SignIn";
import SignUp from "./Sign Up/SignUp";
import { useHistory } from "react-router-dom"

const Header = () => {
    const { isAuth, currentUser } = useSelector((state:any) => state.authorizationReducer);
    const history = useHistory();

    const historyHandler = () => {
        history.push('/');
    };
    
    return (
        <header className={styles.header}>
            <img
                src={logo}
                className={styles.image}
                alt="logo"
                onClick={() => historyHandler()}
            />
                {!isAuth
                    ?  
                        <div>
                            <SignIn />
                            <SignUp />
                        </div>
                    :
                        <div>
                            <span className={styles.user}>Hello, {currentUser.login}</span>
                            <Exit />
                        </div>
                }
        </header>
    )
};

export default Header;