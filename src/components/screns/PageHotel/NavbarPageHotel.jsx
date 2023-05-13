import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { doc, getDoc} from 'firebase/firestore/lite';
import { useParams, useNavigate } from 'react-router-dom'
import './NavbarPageHotel.css';
import { db } from '../../../firebase';
const NavbarPageHotel = () => {
    const {id} = useParams();
    const [hotelName, setHotelName] = useState("");
    const [ehotelName, setehotelName] = useState("");
    const [activeTab, setActiveTab] = useState('Home')
    const location = useLocation()
    useEffect(()=>{
    if(location.pathname === '/'){
        setActiveTab('Home')
    }else if(location.pathname === '/account'){
        setActiveTab('Account')
    }
    }, [location])
    const docRef = doc(db, 'hotels', id)
  const getHotels = async () =>{
    const hotelsSnapshot = await getDoc(docRef);
    setehotelName(hotelsSnapshot.data().hotelName)
  }
  getHotels()
  return (
    <div className='header-page-hotel'>
      <p className="logo">{ehotelName}</p>
      <div className="header-right">
        <Link to='/'><p className={`${activeTab === 'Home' ? 'active' : ""}`} onClick={()=>setActiveTab("Home")}>Home</p></Link>
        <Link to='/account'><p className={`${activeTab === 'Account' ? 'active' : ""}`} onClick={()=>setActiveTab("Account")}>Account</p></Link>
      </div>
    </div>
  )
}

export default NavbarPageHotel
