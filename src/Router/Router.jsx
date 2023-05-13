import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signin from '../components/Signin'
import Signup from "../components/Signup";
import Account from "../components/Account";
import { AuthContextProvider } from "../context/AuthContext";
import Home from '../components/screns/Home/Home'
import SecondPage from '../components/SecondPage';
import AllHotels from '../components/screns/Home/allHotels/AllHotels';
import Admin from '../components/screns/Admin/Admin';
import AddHotel from '../components/screns/Admin/AddHotel'
import EditHotel from '../components/screns/Admin/EditHotel';
import ViewHotel from '../components/screns/Admin/ViewHotel';
import ShowPopularHotel from '../components/screns/Home/Main/MainPopular/ShowPopularHotel';
import Page from '../components/screns/PageHotel/Page';
const Router = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup/>  }/>
          <Route path='/' element={<Home/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/all-hotel' element={<AllHotels />} />
          <Route path='/adminPage' element={<Admin />} />
          <Route path='/pageTest' element={<ShowPopularHotel/>} />
          <Route path='/add' element={<AddHotel/>} />
          <Route path='/edit/:id' element={<EditHotel/>} />
          <Route path='/view/:id' element={<ViewHotel/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default Router
