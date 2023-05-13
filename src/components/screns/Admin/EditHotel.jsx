import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from '../../../firebase';

const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentHotelName, setCurrentHotelName] = useState('');
  const [currentHotelLocation, setCurrentHotelLocation] = useState('');
  const [currentHotelCity, setCurrentHotelCity] = useState('');
  const [currentHotelCountry, setCurrentHotelCountry] = useState('');
  const [currentHotelPrice, setCurrentHotelPrice] = useState('');
  const [currentHotelRating, setCurrentHotelRating] = useState('');
  const [currentHotelImageMain, setCurrentHotelImageMain] = useState('');
  const [currentHotelNumberPhone, setCurrentHotelNumberPhone] = useState('');
  const [currentHotelTextTitle, setCurrentHotelTextTitle] = useState('');
  const [currentHotelDescription, setCurrentHotelDescription] = useState('');
  const [currentHotelMapLocation, setCurrentHotelMapLocation] = useState('');
  const [currentHotelImage1, setCurrentHotelImage1] = useState('');
  const [currentHotelImage2, setCurrentHotelImage2] = useState('');
  const [currentHotelImage3, setCurrentHotelImage3] = useState('');
  const [updatedHotelName, setUpdatedHotelName] = useState('')
  const [updatedHotelLocation, setUpdatedHotelLocation] = useState('');
  const [updatedHotelCity, setUpdatedHotelCity] = useState('');
  const [updatedHotelCountry, setUpdatedHotelCountry] = useState('');
  const [updatedHotelPrice, setUpdatedHotelPrice] = useState('');
  const [updatedHotelRating, setUpdatedHotelRating] = useState('');
  const [updatedHotelImageMain, setUpdatedHotelImageMain] = useState('');
  const [updatedHotelNumberPhone, setUpdatedHotelNumberPhone] = useState('');
  const [updatedHotelTextTitle, setUpdatedHotelTextTitle] = useState('');
  const [updatedHotelDescription, setUpdatedHotelDescription] = useState('');
  const [updatedHotelMapLocation, setUpdatedHotelMapLocation] = useState('');
  const [updatedHotelImage1, setUpdatedHotelImage1] = useState('');
  const [updatedHotelImage2, setUpdatedHotelImage2] = useState('');
  const [updatedHotelImage3, setUpdatedHotelImage3] = useState('');
  const docRef = doc(db, 'hotels', id)
  useEffect(()=>{
    const getHotel = async()=>{
        const hotelsSnapshot = await getDoc(docRef);
        setCurrentHotelName(hotelsSnapshot.data().hotelName)
        setCurrentHotelLocation(hotelsSnapshot.data().hotelLocation)
        setCurrentHotelCity(hotelsSnapshot.data().hotelCity)
        setCurrentHotelCountry(hotelsSnapshot.data().hotelCountry)
        setCurrentHotelPrice(hotelsSnapshot.data().hotelPrice)
        setCurrentHotelRating(hotelsSnapshot.data().hotelRating)
        setCurrentHotelImageMain(hotelsSnapshot.data().hotelImageMain)
        setCurrentHotelNumberPhone(hotelsSnapshot.data().hotelNumberPhone)
        setCurrentHotelTextTitle(hotelsSnapshot.data().hotelTextTitle)
        setCurrentHotelDescription(hotelsSnapshot.data().hotelDescription)
        setCurrentHotelMapLocation(hotelsSnapshot.data().hotelMapLocation)
        setCurrentHotelImage1(hotelsSnapshot.data().hotelImage1)
        setCurrentHotelImage2(hotelsSnapshot.data().hotelImage2)
        setCurrentHotelImage3(hotelsSnapshot.data().hotelImage3)
    };
    getHotel();
  }, [docRef])
  const update = async()=>{
    try{
    const newHotelName = updatedHotelName !== '' ? updatedHotelName : currentHotelName
    const newHotelLocation = updatedHotelLocation !== '' ? updatedHotelLocation : currentHotelLocation
    const newHotelCity = updatedHotelCity !== '' ? updatedHotelCity : currentHotelCity
    const newHotelCountry = updatedHotelCountry !== '' ? updatedHotelCountry : currentHotelCountry
    const newHotelPrice = updatedHotelPrice !== '' ? updatedHotelPrice : currentHotelPrice
    const newHotelRating = updatedHotelRating !== '' ? updatedHotelRating : currentHotelRating
    const newHotelImageMain = updatedHotelImageMain !== '' ? updatedHotelImageMain : currentHotelImageMain
    const newHotelNumberPhone = updatedHotelNumberPhone !== '' ? updatedHotelNumberPhone : currentHotelNumberPhone
    const newHotelTextTitle = updatedHotelTextTitle !== '' ? updatedHotelTextTitle : currentHotelTextTitle
    const newHotelDescription = updatedHotelDescription !== '' ? updatedHotelDescription : currentHotelDescription
    const newHotelMapLocation = updatedHotelMapLocation !== '' ? updatedHotelMapLocation : currentHotelMapLocation
    const newHotelImage1 = updatedHotelImage1 !== '' ? updatedHotelImage1 : currentHotelImage1
    const newHotelImage2 = updatedHotelImage2 !== '' ? updatedHotelImage2 : currentHotelImage2
    const newHotelImage3 = updatedHotelImage3 !== '' ? updatedHotelImage3 : currentHotelImage3
    await updateDoc(docRef, {
        hotelName: newHotelName,
      hotelLocation: newHotelLocation,
      hotelCity: newHotelCity,
      hotelCountry: newHotelCountry,
      hotelPrice: Number(newHotelPrice),
      hotelRating: Number(newHotelRating),
      hotelImageMain: newHotelImageMain,
      hotelNumberPhone: newHotelNumberPhone,
      hotelTextTitle: newHotelTextTitle,
      hotelDescription: newHotelDescription,
      hotelMapLocation: newHotelMapLocation,
      hotelImage1: newHotelImage1,
      hotelImage2: newHotelImage2,
      hotelImage3: newHotelImage3
    });
    navigate('/adminPage');
  }catch(e){
    console.error('Ошибка при обновлении данных:', e);
  }
  }
  return (
    <div className="max-w-md mx-auto px-3">
      <h1 className="text-2xl font-bold mb-4 text-center mt-3">Edit Hotel {currentHotelName}</h1>
      <button className='mt-3 border bg-gray-50'><Link to='/adminPage'>Back to Admin Page</Link></button>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 font-medium">
            Name Hotel
          </label>
          <input
            value={updatedHotelName !== '' ? updatedHotelName : currentHotelName}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelName(e.target.value);}}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Hotel Location
          </label>
          <input
            value={updatedHotelLocation !== '' ? updatedHotelLocation : currentHotelLocation}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelLocation(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Hotel City
          </label>
          <input
            value={updatedHotelCity !== '' ? updatedHotelCity : currentHotelCity}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelCity(e.target.value);}}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Hotel Country
          </label>
          <input
            value={updatedHotelCountry !== '' ? updatedHotelCountry : currentHotelCountry}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelCountry(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Price for one night
          </label>
          <input
            type="number"
            value={updatedHotelPrice !== '' ? updatedHotelPrice : currentHotelPrice}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelPrice(e.target.value);}}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Rating of Hotel
          </label>
          <input
            type="number"
            max={5}
            value={updatedHotelRating !== '' ? updatedHotelRating : currentHotelRating}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelRating(e.target.value);}}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Main Photo Hotel
          </label>
          <input
            value={updatedHotelImageMain !== '' ? updatedHotelImageMain : currentHotelImageMain}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelImageMain(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Number Phone of Hotel
          </label>
          <input
            value={updatedHotelNumberPhone !== '' ? updatedHotelNumberPhone : currentHotelNumberPhone}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelNumberPhone(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Title of Hotel
          </label>
          <input
            value={updatedHotelTextTitle !== '' ? updatedHotelTextTitle : currentHotelTextTitle}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelTextTitle(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Description of Hotel
          </label>
          <input
            value={updatedHotelDescription !== '' ? updatedHotelDescription : currentHotelDescription}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelDescription(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Map Location
          </label>
          <input
            value={updatedHotelMapLocation !== '' ? updatedHotelMapLocation : currentHotelMapLocation}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelMapLocation(e.target.value);}}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Image hotel 1
          </label>
          <input
            value={updatedHotelImage1 !== '' ? updatedHotelImage1 : currentHotelImage1}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelImage1(e.target.value);}}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Image hotel 2
          </label>
          <input
            value={updatedHotelImage2 !== '' ? updatedHotelImage2 : currentHotelImage2}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelImage2(e.target.value);}}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Image hotel 3
          </label>
          <input
            value={updatedHotelImage3 !== '' ? updatedHotelImage3 : currentHotelImage3}
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={(e) => {setUpdatedHotelImage3(e.target.value);}}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {update().then(e => e.message);}}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditHotel
