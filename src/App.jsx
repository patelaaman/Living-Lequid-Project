import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className='app'>
        <Navbar></Navbar>
      </div>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
