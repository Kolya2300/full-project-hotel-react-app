import React from 'react'
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import styles from './FormRegister.module.css'
const FormRegister = () => {
  return (
    <div className={`${styles.form_box} ${styles.register}`}>
      <form className={styles.register__form}>
      <h2>Register</h2>
        <div className={styles.input_box}>
          <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
          <input type="text" required className="register__form-user-name"/>
          <label>User Name</label>
        </div>
        <div className={styles.input_box}>
          <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
          <input type="email" required className="register__form-email" />
            <label>Email</label>
        </div>
        <div className={styles.input_box}>
          <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" required className="register__form-password" />
            <label>Password</label>
        </div>
        <div className={styles.remember_forgot}>
          <label><input type="checkbox" className="register__form-checked" />I agree to the terms & conditions </label>
        </div>
        <button className={styles.btn} type="submit">Register</button>
        <div className={styles.login_register}>
          <p>Already have an account?<a href="#" className="login-link">Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default FormRegister;