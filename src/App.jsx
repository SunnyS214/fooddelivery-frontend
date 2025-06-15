import React, { useContext, useState } from 'react'
import Navbar from './component/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './component/Footer/Footer'
import LoginPopUp from './component/LoginPopup/LoginPopUp'

const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <>
  
    {
      showLogin ? <LoginPopUp setshowLogin={setshowLogin} />: <></>
    }
    <div className='app'>
      <Navbar setshowLogin={setshowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />

      </Routes>
    </div>
      <Footer/>
  </>
  )
}

export default App
