import React from 'react'
import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import styles from './Form.module.css'
const Form = () => {
    return (
        <div className={styles.form__inner}>
           <div className={styles.wrapper}>
               <FormLogin/>
               <FormRegister/>
           </div>
        </div>
    );
}

export default Form;