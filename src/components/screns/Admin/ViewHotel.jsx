import { doc, getDoc } from "firebase/firestore/lite";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import NavbarPageHotel from "../PageHotel/NavbarPageHotel";
import HeaderTop from "../Home/Header/HeaderTop/HeaderTop";
import MainPopular from "../Home/Main/MainPopular/MainPopular";
import MainDiscover from "../Home/Main/MainDiscover/MainDiscover";
import DiscoverHistoryViewHotel from "./DiscoverHistoryViewHotel";
import FagBlock from './FagBlock'
import Slider from "react-slick";
import ContactInfo from "./ContactInfo";
import Footer from '../Home/Footer/Footer'
const ViewHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotelName, setHotelName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelCity, setHotelCity] = useState("");
  const [hotelCountry, setHotelCountry] = useState("");
  const [hotelPrice, setHotelPrice] = useState("");
  const [hotelRating, setHotelRating] = useState("");
  const [hotelImageMain, setHotelImageMain] = useState("");
  const [hotelNumberPhone, setNumberPhone] = useState("");
  const [hotelTextTitle, setHotelTextTitle] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [hotelMapLocation, setHotelMapLocation] = useState("");
  const [hotelImage1, setHotelImage1] = useState("");
  const [hotelImage2, setHotelImage2] = useState("");
  const [hotelImage3, setHotelImage3] = useState("");

  const [ehotelName, setehotelName] = useState("");
  const [ehotelLocation, setehotelLocation] = useState("");
  const [ehotelCity, setehotelCity] = useState("");
  const [ehotelCountry, setehotelCountry] = useState("");
  const [ehotelPrice, setehotelPrice] = useState("");
  const [ehotelRating, setehotelRating] = useState("");
  const [ehotelImageMain, setehotelImageMain] = useState("");
  const [ehotelNumberPhone, setehumberPhone] = useState("");
  const [ehotelTextTitle, setehotelTextTitle] = useState("");
  const [ehotelDescription, setehotelDescription] = useState("");
  const [ehotelMapLocation, setehotelMapLocation] = useState("");
  const [ehotelImage1, setehotelImage1] = useState("");
  const [ehotelImage2, setehotelImage2] = useState("");
  const [ehotelImage3, setehotelImage3] = useState("");
  const docRef = doc(db, "hotels", id);
  const getHotels = async () => {
    const hotelsSnapshot = await getDoc(docRef);
    setehotelName(hotelsSnapshot.data().hotelName);
    setehotelLocation(hotelsSnapshot.data().hotelLocation);
    setehotelCity(hotelsSnapshot.data().hotelCity);
    setehotelCountry(hotelsSnapshot.data().hotelCountry);
    setehotelPrice(hotelsSnapshot.data().hotelPrice);
    setehotelRating(hotelsSnapshot.data().hotelRating);
    setehotelImageMain(hotelsSnapshot.data().hotelImageMain);
    setehumberPhone(hotelsSnapshot.data().hotelNumberPhone);
    setehotelTextTitle(hotelsSnapshot.data().hotelTextTitle);
    setehotelDescription(hotelsSnapshot.data().hotelDescription);
    setehotelMapLocation(hotelsSnapshot.data().hotelMapLocation);
    setehotelImage1(hotelsSnapshot.data().hotelImage1);
    setehotelImage2(hotelsSnapshot.data().hotelImage2);
    setehotelImage3(hotelsSnapshot.data().hotelImage3);
  };
  getHotels();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <HeaderTop />
      <div className="mt-12">
        <img src={ehotelImageMain} alt="" className="float-left ml-40 mr-24" />
        <a
          href={ehotelMapLocation}
          title="Google maps link"
          className="text-green-500"
        >
          {ehotelCity}
        </a>
        <h1 className="text-2xl font-bold mt-5 mb-5">{ehotelName}</h1>
      </div>
      <div className="flex max-w-[400px] mb-7">
        <p className="mr-5">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }).format(ehotelPrice)}
          Par Nights
        </p>
        <div className="border-l-2 mr-5"></div>
        <p>Rating is {ehotelRating ? ehotelRating : 0}&#9733;</p>
      </div>
      <p className="mb-3">{ehotelDescription}</p>
      <div className="flex justify-end content-end max-w-[300px]">
        <button className="border p-2 border-green-700 bg-green-400 text-white rounded-2xl px-6">
          To book now
        </button>
      </div>
      <div className="ml-16 mb-5">
        <ContactInfo/>
        <MainPopular />
        <DiscoverHistoryViewHotel style={{width: '1200px'}}/>
        <h3 className="text-center text-2xl mb-3 font-bold uppercase mt-9">Image of Hotel</h3>
        <Slider
          {...settings}
          className="max-w-[700px] flex justify-center"
          style={{ margin: "0 auto", marginBottom: '40px', marginTop: '40px' }}
        >
          <img src={ehotelImage1} alt="" className="max-h-[400px]" />
          <img src={ehotelImage2} alt="" className="max-h-[400px]" />
          <img src={ehotelImage3} alt="" className="max-h-[400px]" />
        </Slider>
      </div>
      <FagBlock />
      <Footer/>
    </div>
  );
};

export default ViewHotel;
