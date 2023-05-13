import React from "react";
import Hotels from "./Hotels";
import styles from "./AllHotels.module.css";
import ButtonBackHome from "./ButtonBackHome";
const AllHotels = () => {
  return(
    <>
    <h1 className={styles.title__hotel}>All Hotels</h1>
    <ButtonBackHome />
    <div className={styles.hotel__card}>
        
        <Hotels />
    </div>
    
    </>
  )
};

export default AllHotels;
