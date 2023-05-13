import React from 'react'
import styles from '../HeaderTop.module.css'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();

    const handleAccount = async () => {
        try {
            navigate('/account');
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <button onClick={handleAccount} className={styles.btnLogin_popup}>Profile</button>
    )
}

export default Profile
