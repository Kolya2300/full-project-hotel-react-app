import React from 'react'
import styles from '../HeaderTop.module.css'
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();

    const handleAccount = async () => {
        try {
            navigate('/signin');
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <button onClick={handleAccount} className={styles.btnLogin_popup}>Login</button>
    )
}

export default LoginButton;