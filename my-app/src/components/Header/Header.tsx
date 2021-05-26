import styles from "./Header.module.css";
import SignIn from "./Sign In/SignIn";
import SignUp from "./Sign Up/SignUp";
import logo from "../../images/pokemons.png";

const Header:React.FunctionComponent = () => {
    return (
        <div className={styles.header}>
            <img src={logo} className={styles.image} alt="logo" />
            <div>
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default Header;