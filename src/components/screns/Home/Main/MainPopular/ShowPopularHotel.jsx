import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore/lite";
import { db } from "../../../../../firebase";
import styles from './MainPopular.module.css';
import { Link } from "react-router-dom";
import NavbarPageHotel from "../../../PageHotel/NavbarPageHotel";
const ShowPopularHotel = () => {
  const [hotels, setHotels] = useState([]);
  async function getHotels(db) {
    const hotelsCollection = collection(db, "hotels");
    const hotelsSnapshot = await getDocs(hotelsCollection);
    const hotelsList = hotelsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setHotels(hotelsList);
  }
  useEffect(() => {
    getHotels(db);
  }, []);
  return(
    <div className={styles.hotel__card}>
    {hotels.slice(0,3).map(hotel =>{
        return (
  
            <div className={styles.hotel__card_item}>
                <img src={hotel.hotelImageMain} alt="" className={styles.hotel__card_img}/>
                <a href={hotel.hotelMapLocation} className={styles.hotel__card_location}
                   title="Google maps link">{hotel.hotelCity}</a>
                <p className={styles.hotel__card_name_hotel}><a>{hotel.hotelName}</a>
                </p>
                <div className={styles.hotel__starts}>
                    <p className={styles.hotel__card_price}>{new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                    }).format(hotel.hotelPrice)} Par Night</p>
                    <div className="stars">Rating is {hotel.hotelRating ? hotel.hotelRating : 0} &#9733;</div>
                </div>
                <div className='flex justify-center mb-4'>
                <button className="flex justify-center">
                    <Link to={`/view/${hotel.id}`} className='bg-yellow-500 text-center'>View hotel page</Link>
                </button>
                </div>
                
            </div>
        )
    })}
    </div>
  )
};

export default ShowPopularHotel;
