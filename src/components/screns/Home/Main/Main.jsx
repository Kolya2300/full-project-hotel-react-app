import React from 'react';
import MainPopular from './MainPopular/MainPopular'
import MainProvide from './MainProvide/MainProvide'
import MainDiscover from './MainDiscover/MainDiscover'
import MainReview from './MainReview/MainReview'
import MainMap from './MainMap/MainMap'
import styles from './Main.module.css'
const Main = () => {
    return (
        <div className={styles.main}>
            <MainPopular />
            <MainProvide />
            <MainDiscover />
            <MainReview />
            <MainMap />
        </div>
    );
};

export default Main;
