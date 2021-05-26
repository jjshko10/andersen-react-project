import './Modal.css';
import Form from './Form/Form';

interface ModalProps {
    active: boolean;
    setActive: any;
}

const Modal:React.FunctionComponent<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={event => event.stopPropagation()}>
                {children}
                <Form setActive={setActive}/>
            </div>
        </div>
    )
};

export default Modal;