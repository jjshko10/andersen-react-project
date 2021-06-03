import { useDispatch } from 'react-redux';
import { exitFromAccount } from '../../../app/actions/submitForm';
import styles from './Exit.module.css';

const Exit:React.FunctionComponent = () => {

    const dispatch = useDispatch();

    return (
        <button className={styles.button} onClick={() => dispatch(exitFromAccount())}>Exit</button>
    )
};

export default Exit;