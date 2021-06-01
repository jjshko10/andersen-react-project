import React from "react";
import { useSelector } from "react-redux";
import logo from "../../images/pokemons.png";
import Exit from "./Exit/Exit";
import styles from "./Header.module.css";
import SignIn from "./Sign In/SignIn";
import SignUp from "./Sign Up/SignUp";

const Header:React.FunctionComponent = () => {

    const { isAuth, currentUser } = useSelector((state:any) => state.authorizationReducer);
    
    return (
        <header className={styles.header}>
            <img
                src={logo}
                className={styles.image}
                alt="logo"
                /* onClick={() => {
                    console.log('clicked');
                }} */
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
}

export default Header;