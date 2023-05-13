import React from 'react';
import styles from './MainMap.module.css'
const MainMap = () => {
    return (
        <div>
            <section className={styles.map} id="map">
                <div className="container">
                    <div className={styles.map__inner}>
                        <div className="insert__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1182984610627!2d-0.17074313428136348!3d51.52939002963878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab93d88066b%3A0x37f972bb961a604d!2zTG9kZ2UgUmQsIExvbmRvbiBOVzggN0pULCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1677916740198!5m2!1sru!2sua"
                                width="1280" height="677" className={styles.iframe}  allowFullScreen=""
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className={styles.map__contact}>
                            <div className="map__contact-text">
                                <h3 className={styles.contact_title}>Location of our Hotelos</h3>
                                <p className={styles.contact_text}>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry. Lorem Ipsum has been the industry's </p>
                            </div>
                            <div className={styles.map__contact_input} id="contact">
                                <label htmlFor="">
                                    <input type="text" name="" id="" className={styles.map__contact_enter}
                                           placeholder="Enter your email" />
                                        <button className={styles.map__contact_btn}>Contact</button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainMap;
