import React, { useState, useEffect } from "react";
import styles from "./SearchHotel.module.css";
import imgLocation from "../../../../../../image/img/pin1.png";
import checkIn from "../../../../../../image/img/calendar1.png";
import checkOut from "../../../../../../image/img/calendar2.png";
import person from "../../../../../../image/img/person1.png";
import searchButton from "../../../../../../image/img/search.png";
import { db } from "../../../../../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const SearchHotel = () => {
  const [value, setValue] = useState("");
  const [hotels, setHotels] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate1, setSelectedDate1] = useState("");
  const [adultPeople, setAdultPeople] = useState("");
  const [countRooms, setCountRooms] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      const hotelsData = querySnapshot.docs.map((doc) => doc.data());
      setHotels(hotelsData);
    };

    getHotels();

    const filteredHotels = hotels.filter((hotel) => {
      const lowercaseSearchTerm = value.toLowerCase();
      const lowercaseCity = hotel.hotelCity.toLowerCase();
      const lowercaseName = hotel.hotelName.toLowerCase();
      const lowercaseLocation = hotel.hotelLocation.toLowerCase();

      return (
        lowercaseCity.includes(lowercaseSearchTerm) ||
        lowercaseName.includes(lowercaseSearchTerm) ||
        lowercaseLocation.includes(lowercaseSearchTerm)
      );
    });

    setFilteredHotels(filteredHotels);
  }, [value, hotels]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDate1Change = (event) => {
    setSelectedDate1(event.target.value);
  };

  const calculateDaysDifference = () => {
    const startDate = new Date(selectedDate);
    const endDate = new Date(selectedDate1);
    const differenceMs = Math.abs(endDate - startDate);
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    return differenceDays;
  };

  const handleAdultPeople = (event) => {
    setAdultPeople(event.target.value);
  };

  const handleCountRooms = (event) => {
    setCountRooms(event.target.value);
  };

  const onSearch = () => {
    const filteredHotels = hotels.filter((hotel) => {
      const lowercaseCity = hotel.hotelCity.toLowerCase();
      const lowercaseName = hotel.hotelName.toLowerCase();
      const lowercaseLocation = hotel.hotelLocation.toLowerCase();
      return (
        lowercaseCity.includes(value.toLowerCase()) ||
        lowercaseName.includes(value.toLowerCase()) ||
        lowercaseLocation.includes(value.toLowerCase())
      );
    });

    setFilteredHotels(filteredHotels);
  };

  return (
    <div>
      <div className={styles.search__inner}>
        <div className={styles.search}>
          <nav className={styles.search__menu}>
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
                  value={value}
                  onChange={onChange}
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
                  value={selectedDate}
                  onChange={handleDateChange}
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
                  value={selectedDate1}
                  onChange={handleDate1Change}
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
                  value={adultPeople ? adultPeople : 1}
                  onChange={handleAdultPeople}
                  style={{ width: "30px" }}
                />
              </li>
            </ul>
            <button className={styles.search__menu_btn} onClick={onSearch}>Search</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
