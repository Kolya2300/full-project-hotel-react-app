import React, { useState, useEffect } from "react";
import styles from "./SearchHotel.module.css";
import imgLocation from "../../../../../../image/img/pin1.png";
import checkIn from "../../../../../../image/img/calendar1.png";
import checkOut from "../../../../../../image/img/calendar2.png";
import person from "../../../../../../image/img/person1.png";
import searchButton from "../../../../../../image/img/search.png";
import { db } from "../../../../../../firebase";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore/lite";

const SearchHotel = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adultCount, setAdultCount] = useState(1);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const dbRef = collection(db, "hotels");
      const q = query(dbRef, where("hotelCity", "==", location.toLowerCase()));
      const querySnapshot = await getDocs(q);
      const hotelsData = querySnapshot.docs.map((doc) => doc.data());
      setHotels(hotelsData);
    };

    fetchHotels();
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleAdultCountChange = (event) => {
    setAdultCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch hotels based on the entered data and update the hotels state
    const fetchHotels = async () => {
      const dbRef = collection(db, "hotels");
      const q = query(dbRef, where("hotelCity", "==", location.toLowerCase()));
      const querySnapshot = await getDocs(q);
      const hotelsData = querySnapshot.docs.map((doc) => doc.data());
      setHotels(hotelsData);
    };

    fetchHotels();
  };

  return (
    <div>
      <div className={styles.search__inner}>
        <div className={styles.search}>
          <form className={styles.search__menu} onSubmit={handleSubmit}>
            <ul className={styles.search__list}>
              <li className={styles.search__list_item}>
                <div className={styles.search__list_img}>
                  <img
                    src={imgLocation}
                    alt=""
                    className={styles.search__list_img}
                  />
                  <button className={styles.search__list_btn}>Location</button>
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={handleLocationChange}
                  className={styles.locationInput}
                  placeholder="Enter location"
                  style={{ width: "150px", marginLeft: "25px" }}
                />
              </li>
              <li className={styles.search__list_item}>
                <div className={styles.search__list_img}>
                  <img
                    src={checkIn}
                    alt=""
                    className={styles.search__list_img}
                  />
                  <button type="button" className={styles.search__list_btn}>
                    Check in
                  </button>
                </div>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                />
              </li>
              <li className={styles.search__list_item}>
                <div className={styles.search__list_img}>
                  <img
                    src={checkOut}
                    alt=""
                    className={styles.search__list_img}
                  />
                  <button type="button" className={styles.search__list_btn}>
                    Check out
                  </button>
                </div>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                />
              </li>
              <li className={styles.search__list_item}>
                <div className={styles.search__list_img}>
                  <img
                    src={person}
                    alt=""
                    className={styles.search__list_img}
                  />
                  <button type="button" className={styles.search__list_btn}>
                    Rooms for
                  </button>
                </div>
                <input
                  type="number"
                  value={adultCount}
                  onChange={handleAdultCountChange}
                  style={{ width: "30px" }}
                />
              </li>
            </ul>
            <button className={styles.search__menu_btn} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Render hotel results */}
      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h3>{hotel.hotelName}</h3>
            <p>{hotel.hotelCity}</p>
            {/* //TODO: add other props about hotel  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHotel;
