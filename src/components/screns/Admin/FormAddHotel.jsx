import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from "../../../firebase";
const FormAddHotel = () => {
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
  const submit = async () => {
    await addDoc(collection(db, "hotels"), {
      hotelName: hotelName,
      hotelLocation: hotelLocation,
      hotelCity: hotelCity,
      hotelCountry: hotelCountry,
      hotelPrice: Number(hotelPrice),
      hotelRating: Number(hotelRating),
      hotelImageMain: hotelImageMain,
      hotelNumberPhone: hotelNumberPhone,
      hotelTextTitle: hotelTextTitle,
      hotelDescription: hotelDescription,
      hotelMapLocation: hotelMapLocation,
      hotelImage1: hotelImage1,
      hotelImage2: hotelImage2,
      hotelImage3: hotelImage3,
    });
    navigate("/adminPage");
  };
  return (
    <div className="max-w-md mx-auto px-3">
      <h1 className="text-2xl font-bold mb-4 text-center mt-3">Add Hotel</h1>
      <button className='mt-3 border bg-gray-50'><Link to='/adminPage'>Back to Admin Page</Link></button>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 font-medium">
            Name Hotel
          </label>
          <input
            value={hotelName}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelName(e.target.value);}}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Hotel Location
          </label>
          <input
            value={hotelLocation}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelLocation(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Hotel City
          </label>
          <input
            value={hotelCity}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelCity(e.target.value);}}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Hotel Country
          </label>
          <input
            value={hotelCountry}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelCountry(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Price for one night
          </label>
          <input
            type="number"
            value={hotelPrice}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelPrice(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Rating Hotel
          </label>
          <input
            type="number"
            max={5}
            value={hotelRating}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelRating(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Main Photo Hotel
          </label>
          <input
            value={hotelImageMain}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelImageMain(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Number Phone of Hotel
          </label>
          <input
            value={hotelNumberPhone}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setNumberPhone(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Title of Hotel
          </label>
          <input
            value={hotelTextTitle}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelTextTitle(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Description of Hotel
          </label>
          <input
            value={hotelDescription}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelDescription(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Map Location
          </label>
          <input
            value={hotelMapLocation}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelMapLocation(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Image hotel 1
          </label>
          <input
            value={hotelImage1}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelImage1(e.target.value);}}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Image hotel 2
          </label>
          <input
            value={hotelImage2}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelImage2(e.target.value);}}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Image hotel 3
          </label>
          <input
            value={hotelImage3}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setHotelImage3(e.target.value);}}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {submit();}}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormAddHotel;
