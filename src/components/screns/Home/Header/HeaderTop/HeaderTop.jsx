import React, {useState} from 'react';
import styles from  './HeaderTop.module.css'
import Navbar from '../../../../../Router/Navbar'
import LoginButton from "./LoginButton/LoginButton";
import Profile from './LoginButton/Profile';
import AdminProfileButton from './LoginButton/AdminProfileButton'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../../../../context/AuthContext';
import { emailAdmin, passwordAdmin } from '../../../../Signin';
const HeaderTop = () => {
    const {user} = UserAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    if(user){
        return (
            <div>
                <div className={styles.header__top}>
                    <div></div>
                    <Navbar className="menu__list_item"/>
                    <Profile />
                </div>
            </div>
        );
    }
    if(!user){
        return (
            <div>
                <div className={styles.header__top}>
                    <div></div>
                    <Navbar className="menu__list_item"/>
                    <LoginButton />
                </div>
            </div>
        );
    }
    if(email === emailAdmin && password === passwordAdmin){
        return (
            <div>
                <div className={styles.header__top}>
                    <div></div>
                    <Navbar className="menu__list_item"/>
                    <AdminProfileButton />
                </div>
            </div>
        );
        // TODO: need to realize show an admin page in the main page, and redict to admin page
    }
    
};

export default HeaderTop;