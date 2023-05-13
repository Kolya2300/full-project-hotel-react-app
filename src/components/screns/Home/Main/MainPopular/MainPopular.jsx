import React from 'react';
import styles from './MainPopular.module.css'
import Page from "../../../PageHotel/Page";
import './js/star-ratings'
import './star.css'
import { hotels } from '../../../hotelArrays';
import ShowAllHotels from './ShowAllHotels';
import ShowPopularHotel from './ShowPopularHotel';
const MainPopular = () => {
    return (
        <div>
            <section className={styles.popular} id="popular">
                <div className={styles.container}>
                    <h1 className={styles.popular__title}>Our most popular Hotels</h1>
                    <div className={styles.popular__box}>
                        <p className={styles.popular__box_text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <ShowAllHotels />
                    </div>
                    <ShowPopularHotel/>
                </div>
            </section>
        </div>
    );
};

export default MainPopular;
