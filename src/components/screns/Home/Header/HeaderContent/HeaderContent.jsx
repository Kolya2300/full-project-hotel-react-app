import React from 'react';
import styles from './HeaderContent.module.css'
import SearchHotel from "./SearchHotel/SearchHotel";
import videoImage from '../../../../../image/img/video.svg'
import mainPhoto from '../../../../../image/img/MainPhoto.png'
const HeaderContent = () => {
    return (
        <div>
            <div className={styles.header__content}>
                <div className={styles.container}>
                    <div className={styles.header__inner}>
                        <div className={styles.header__find}>
                            <h1 className={styles.find__title}>Find your perfect place to stay</h1>
                            <p className={styles.find__text}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.</p>
                            <div className={styles.find__video}>
                                <img src={videoImage} alt="" className={styles.video__img}></img>
                                    <p className={styles.video__text}>Watch video</p>
                            </div>
                        </div>
                        <img src={mainPhoto} alt="" className={styles.header__img}></img>
                    </div>
                    <SearchHotel />
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
