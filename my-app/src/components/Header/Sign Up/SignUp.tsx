import { useDispatch, useSelector } from 'react-redux';
import styles from './SignUp.module.css'
import { openModal } from '../../../app/actions/openModal';

const SignUp:React.FunctionComponent = () => {
    
    const dispatch = useDispatch();

    return (
        <button className={styles.button} onClick={() => dispatch(openModal())}>Sign Up</button>
    )
};

export default SignUp;