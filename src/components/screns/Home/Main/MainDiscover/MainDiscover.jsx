import React from 'react';
import styles from './MainDiscover.module.css'
const MainDiscover = () => {
    return (
        <div>
            <section className={styles.discover} id="discover">
                <div className="container">
                    <div className={styles.discover__inner}>
                        <img src="img/discover.png" alt="" className="discover-img" />
                            <div className={styles.discover__history}>
                                <h2 className={styles.discover__history_title}>Discover our History</h2>
                                <p className={styles.discover__history_text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's
                                </p>
                                <p className={styles.discover__history_text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.
                                </p>
                                <button className={styles.discover__history_btn}>Explore more</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainDiscover;
