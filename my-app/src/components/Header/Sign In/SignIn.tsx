import { useDispatch } from 'react-redux';
import { openModal } from '../../../app/actions/modalActions';
import { authorizationSubmitForm } from '../../../app/actions/submitForm';
import styles from './SignIn.module.css'

const SignIn:React.FunctionComponent = () => {

    const dispatch = useDispatch();

    return (
        <button
            className={styles.button}
            onClick={() => {
                dispatch(openModal());
                dispatch(authorizationSubmitForm(true));
            }}
        >
            Sign In
        </button>
        );
};

export default SignIn;