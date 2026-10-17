import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Item from './Singleitems/Item'
import Cart from './Carts/Cart'
import { useState } from 'react'
import Main_Catagory from './Category/AMain_Catagory'
export default function Flipkard() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home  />
          } />
          <Route path='/item/:id' element={<Item  />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/*' element={<Main_Catagory />} />
          
        </Routes>
      </div>

    </>

  )
}
