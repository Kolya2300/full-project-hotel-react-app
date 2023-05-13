import React from 'react'
import styles from '../HeaderTop.module.css'
import { useNavigate } from 'react-router-dom';
const AdminProfileButton = () => {
    const navigate = useNavigate();

    const handleAccount = async () => {
        try {
            navigate('/adminPage');
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <button onClick={handleAccount} className={styles.btnLogin_popup}>Admin Page</button>
    )
}

export default AdminProfileButton
