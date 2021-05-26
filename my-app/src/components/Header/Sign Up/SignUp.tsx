import { useDispatch } from 'react-redux';
import styles from './SignUp.module.css'
import { openModal } from '../../../app/actions/modalActions';
import { registrationSubmitForm } from '../../../app/actions/submitForm';

const SignUp:React.FunctionComponent = () => {

    const dispatch = useDispatch();

    return (
        <button
            className={styles.button}
            onClick={() => {
                dispatch(openModal());
                dispatch(registrationSubmitForm(true));
            }}
        >
            Sign Up
        </button>
        );
};

export default SignUp;