import React from "react";
import styles from "./Footer.module.css";
import { socialMediaArray } from "./js/socialMediaArray";
const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__inner}>
            <div className="company__detail">
              <div className={styles.company__detail_box}>
                <p className={styles.company__detail_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem fsd.
                </p>
              </div>
              <div className={styles.company__detail_social}>
                {
                    socialMediaArray.map(item =>{
                        return(
                            <a href={item.linkToMedia}><img
                            src={item.imgSocialMedia}
                            alt={item.nameSocialMedia}
                            title={item.nameSocialMedia}
                            className="company__detail-img"
                            /></a>
                        )
                    })
                }
              </div>
            </div>
            <div className="home__link">
              <ul className="home__link-list">
                <li className={styles.help__link_list_item}>
                  <a href="" className="home__link-list-link">
                    Home
                  </a>
                </li>
                <li className={styles.help__link_list_item}>
                  <a href="" className="home__link-list-link">
                    Booking
                  </a>
                </li>
                <li className={styles.help__link_list_item}>
                  <a href="" className="home__link-list-link">
                    Facilities
                  </a>
                </li>
                <li className={styles.help__link_list_item}>
                  <a href="" className="home__link-list-link">
                    Location
                  </a>
                </li>
                <li className={styles.help__link_list_item}>
                  <a href="" className="home__link-list-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="help__link">
              <ul className="help__link-list">
                <li className={styles.home__link_list_item}>
                  <a href="" className="help__link-list-link">
                    Help
                  </a>
                </li>
                <li className={styles.home__link_list_item}>
                  <a href="" className="help__link-list-link">
                    About Us
                  </a>
                </li>
                <li className={styles.home__link_list_item}>
                  <a href="" className="help__link-list-link">
                    Help center
                  </a>
                </li>
                <li className={styles.home__link_list_item}>
                  <a href="" className="help__link-list-link">
                    Privacy policy
                  </a>
                </li>
                <li className={styles.home__link_list_item}>
                  <a href="" className="help__link-list-link">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="get__app">
              <ul className="get__app-list">
                <li className={styles.get__app_list_item}>
                  <a href="" className="get__app-list-link">
                    Get the app
                  </a>
                </li>
                <li className={styles.get__app_list_item}>
                  <a href="" className="get__app-list-link">
                    iOS app
                  </a>
                </li>
                <li className={styles.get__app_list_item}>
                  <a href="" className="get__app-list-link">
                    Android app
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
