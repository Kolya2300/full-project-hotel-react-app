import styles from "../../screns/Home/Main/MainDiscover/MainDiscover.module.css";
import { doc, getDoc } from "firebase/firestore/lite";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
const DiscoverHistoryViewHotel = () => {
  const { id } = useParams();
  const [hotelImage1, setHotelImage1] = useState("");
  const [ehotelImage1, setehotelImage1] = useState("");
  const imageDiscoverDefault = 'https://drive.google.com/file/d/1_vA5RolRL_adFKKLIBtsvYhbAkFvlrxM'
  const docRef = doc(db, "hotels", id);
  const getHotels = async () => {
    const hotelsSnapshot = await getDoc(docRef);
    setehotelImage1(hotelsSnapshot.data().hotelImage1);
  };
  getHotels();
  return (
    <div>
      <section className={styles.discover} id="discover" style={{maxWidth: '1300px', margin: '0 auto'}}>
        <div className="container">
          <div className={styles.discover__inner}>
            <img
              src={ehotelImage1 ? ehotelImage1 : imageDiscoverDefault}
              className={styles.discover_img}
            />
            <div className={styles.discover__history}>
              <h2 className={styles.discover__history_title}>
                Discover our History
              </h2>
              <p className={styles.discover__history_text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <p className={styles.discover__history_text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className={styles.discover__history_btn}>
                Explore more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverHistoryViewHotel;
