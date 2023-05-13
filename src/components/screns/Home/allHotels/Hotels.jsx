import React from 'react'
import { hotels } from "../../hotelArrays";
import styles from "./AllHotels.module.css";
const Hotels = () => {
    return hotels.map((hotel) => {
        return (
          <div className={styles.container}>
            <div>
              <div className={styles.hotel__card_item}>
                <img
                  src={hotel.imgHotel}
                  alt=""
                  className={styles.hotel__card_img}
                />
                <a
                  href={hotel.locationHotelURL}
                  className={styles.hotel__card_location}
                  title="Google maps link"
                >
                  {hotel.locationHotel}
                </a>
                <p className={styles.hotel__card_name_hotel}>
                  <a>{hotel.nameHotel}</a>
                </p>
                <div className={styles.hotel__starts}>
                  <p className={styles.hotel__card_price}>
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(hotel.priceHotelPerOneNight)}{" "}
                    Par Night
                  </p>
                  <div className="stars"></div>
                </div>
              </div>
            </div>
          </div>
        );
      });
}

export default Hotels
