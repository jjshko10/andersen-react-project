import { useDispatch } from 'react-redux';
import styles from './SignUp.module.css'
import { openModal } from '../../../app/actions/modalActions';

const SignUp:React.FunctionComponent = () => {

    const dispatch = useDispatch();

    return (
        <button className={styles.button} onClick={() => dispatch(openModal())}>Sign Up</button>
    )
};

export default SignUp;