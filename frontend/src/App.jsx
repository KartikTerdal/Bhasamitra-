import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import  Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'    
import Info from './pages/InfoPage/InfoPage'
import Profile from './pages/Profile/Profile'
import ExplorePage from './pages/ExplorePage/ExplorePage'
import SurveyPage from './pages/SurveyPage/SurveyPage'
import UserTypePage from './pages/UserTypePage/UserTypePage'
import BrandPage from './pages/BrandPage/BrandPage'
import Booking_Success from './pages/Booking_Success/Booking_Success'
import './App.css';
import ContactPage from './pages/ContactPage/ContactPage'


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/> : <></>} 
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          
          <Route path='/' element={<ExplorePage/>}/>
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/usertype" element={<UserTypePage />} />
          {/* {showLogin && <LoginPopup setShowLogin={setShowLogin} />} */}

          <Route path='/infu' element={<Home/>}/>
          <Route path='/brand' element={<BrandPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path="/person/:id" element={<Profile />} /> 
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/success' element={<Booking_Success/>}/>
          <Route path='/booking' element={<ContactPage/>}/>
          
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
