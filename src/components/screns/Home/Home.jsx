import React from 'react';
import Header from "./Header/Header";
import styles from './Home.module.css'
import Main from "./Main/Main";
import Footer from "./Footer/Footer";




const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
            <Footer />
            
        </div>
    );
};

export default Home;
