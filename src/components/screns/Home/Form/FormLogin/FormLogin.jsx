import React from 'react'
import styles from './FormLogin.module.css'
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"

const FormLogin = () => {
    return (
        <>
                <span className={styles.icon_close}><ion-icon name="close"></ion-icon></span>
                <div className={`${styles.form_box} ${styles.login}`} >
                    <h2>Login</h2>
                    <form id="login_form" className="checkInfoUserLogin">
                        <div className={styles.input_box}>
                            <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
                            <input type="email" required id="login" className="login__form-email" />
                            <label>Email</label>
                        </div>
                        <div className={styles.input_box}>
                            <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required id="password" className="login__form-password" />
                            <label>Password</label>
                        </div>
                        <div className={styles.remember_forgot}>
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button className={styles.btn} type="submit">Login</button>
                        <div className={styles.login_register}>
                            <p>Don't have an account?<a className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
        </>
)
}

export default FormLogin;