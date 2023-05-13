import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './MainPopular.module.css'
const ShowAllHotels = () => {
  const navigate = useNavigate();

  const handlePage = async () => {
    try {
      navigate("/all-hotel");
    } catch (e) {
      console.log(e.message);
    }
  };
  return(
    <>
        <button onClick={handlePage} className={styles.popular__box_all}>All view </button>
    </>
  )
};

export default ShowAllHotels;
