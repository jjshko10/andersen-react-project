import './Modal.css';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../app/actions/modalActions';

interface ModalProps {
    isActive: boolean
}

const Modal:React.FunctionComponent<ModalProps> = ({isActive, children}) => {

    const dispatch = useDispatch();
    
    return (
        <div className={isActive ? 'modal active' : 'modal'} onClick={() => dispatch(closeModal())}>
            <div className={isActive ? 'modal__content active' : 'modal__content'} onClick={event => event.stopPropagation()}>
                {children}
                <Form />
            </div>
        </div>
    )
};

export default Modal;