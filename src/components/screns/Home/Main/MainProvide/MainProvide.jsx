import React from 'react';
import styles from './MainProvide.module.css'
const MainProvide = () => {
    return (
        <div>
            <section className={styles.provide} id="provide">
                <div className="container">
                    <div className={styles.provider__inner}>
                        <div className={styles.provide__box}>
                            <h2 className={styles.provide__box_title}>We do our best facilities provide you</h2>
                            <p className={styles.provide__box_text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been
                                the industry's standard dummy
                            </p>
                            <button className={styles.provide__box_btn}>Contact now</button>
                        </div>
                        <div className={styles.provider__cards}>
                            <div className={styles.provider__cards_item}>
                                <img src="img/workspace.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Private Workspace</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/parking-area.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Parking Area</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/breakfast.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Breakfast</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/wifi.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Free Wifi</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/free.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Free Electricity</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/swimming.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Swimming Pool</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/exersice.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>exercise Space</p>
                            </div>
                            <div className={styles.provider__cards_item}>
                                <img src="img/other.svg" alt="" className="provider__cards-img" />
                                    <p className={styles.provider__cards_text}>Other Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainProvide;
