import styles from "./Header.module.css";
import SignIn from "./Sign In/SignIn";
import SignUp from "./Sign Up/SignUp";
import logo from "../../images/pokemons.png";
import { useSelector } from "react-redux";
import Exit from "./Exit/Exit";

const Header:React.FunctionComponent = () => {

    const { isAuth, currentUser } = useSelector((state:any) => state.authorizationReducer);
    
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.image} alt="logo" />
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
}

export default Header;