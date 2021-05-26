import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorSubmit, iPayload } from "../../../app/actions/submitForm";

const Form = ({setActive}:any) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('Empty login!');
    const [passwordError, setPasswordError] = useState('Empty password!');
    const [formValid, setFormValid] = useState(false);
    const dispatch = useDispatch();
    const { isErrorRegistration } = useSelector((state:any) => state.submitFormReducer);

    const submitForm = (event) => {
        event.preventDefault();
        const userInfo = {
            login,
            password
        }
        //вернуться
        const localStorageInfo:any = localStorage.getItem('user') || '[]';
        const findLogin = JSON.parse(localStorageInfo).filter((elem:iPayload) => elem.login === userInfo.login);
        
        if (findLogin.length === 1) {
            dispatch(errorSubmit());
        } else {
            const usersInfo = JSON.stringify([userInfo, ...JSON.parse(localStorageInfo)]);
            localStorage.setItem('user', usersInfo);
            setActive(false);
        }
    };

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [loginError, passwordError]);

    const loginHandler = event => {
        const login = setLogin(event.target.value);
        setLoginError('');
        return login;
    }

    const passwordHandler = event => {
        const password = setPassword(event.target.value);
        if (event.target.value.length < 3) {
            setPasswordError('Short password!');
        } else {
            setPasswordError('');
        }
        return password;
    }

    const blurHandler = event => {
        switch (event.target.name) {
            case 'login':
                setLoginDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    return (
        <form className='form'>
            {(loginDirty && loginError) && <span style={{color: 'red'}}>{loginError}</span>}
            {{isErrorRegistration} && <span style={{color: 'red'}}>{isErrorRegistration}</span>}
            <input
                value={login}
                type='text'
                placeholder='login'
                className='modal__input'
                name='login'
                onBlur={event => blurHandler(event)}
                onChange={event => loginHandler(event)}
            />
            {(passwordDirty && passwordError) && <span style={{color: 'red'}}>{passwordError}</span>}
            <input
                value={password}
                type='password'
                placeholder='password'
                className='modal__input'
                name='password'
                onBlur={event => blurHandler(event)}
                onChange={event => passwordHandler(event)}
            />
            <button
                type="submit"
                className='modal__button'
                disabled={!formValid}
                onClick={(event) => submitForm(event)}
            >
            Submit
            </button>
        </form>
    )
};

export default Form;