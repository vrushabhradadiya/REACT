
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category_Layout from '../AllComponents/Category_Layout'

import Beauty from './Beauty'
import Fragrances from './Fragrances'
import Furniture from './Furniture'
import Groceries from './Groceries'
import Home_Decoration from './Home_Decoration'
import Kitchen_Accessories from './Kitchen_Accessories'
import Laptops from './Laptops'
import Mens_Shirts from './Mens_Shirts'
import Mens_Shoes from './Mens_Shoes'
import Mens_Watches from './Mens_Watches'
import Mobile_Accessories from './Mobile_Accessories'
import Motorcycle from './Motorcycle'
import Skin_Care from './Skin_Care'
import Smartphones from './Smartphones'
import Sports_Accessories from './Sports_Accessories'
import Sunglasses from './Sunglasses'
import Tablets from './Tablets'
import Tops from './Tops'
import Vehicle from './Vehicle'
import Womens_Bags from './Womens_Bags'
import Womens_Dresses from './Womens_Dresses'
import Womens_Jewellery from './Womens_Jewellery'
import Womens_Shoes from './Womens_Shoes'
import Womens_Watches from './Womens_Watches'

export default function Main_Catagory() {
  return (
    <Routes>
      <Route element={<Category_Layout />}>
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/Fragrances" element={<Fragrances />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Groceries" element={<Groceries />} />
        <Route path="/Home-Decoration" element={<Home_Decoration />} />
        <Route path="/Kitchen-Accessories" element={<Kitchen_Accessories />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/Mens-Shirts" element={<Mens_Shirts />} />
        <Route path="/Mens-Shoes" element={<Mens_Shoes />} />
        <Route path="/Mens-Watches" element={<Mens_Watches />} />
        <Route path="/Mobile-Accessories" element={<Mobile_Accessories />} />
        <Route path="/Motorcycle" element={<Motorcycle />} />
        <Route path="/Skin-Care" element={<Skin_Care />} />
        <Route path="/Smartphones" element={<Smartphones />} />
        <Route path="/Sports-Accessories" element={<Sports_Accessories />} />
        <Route path="/Sunglasses" element={<Sunglasses />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/Tops" element={<Tops />} />
        <Route path="/Vehicle" element={<Vehicle />} />
        <Route path="/Womens-Bags" element={<Womens_Bags />} />
        <Route path="/Womens-Dresses" element={<Womens_Dresses />} />
        <Route path="/Womens-Jewellery" element={<Womens_Jewellery />} />
        <Route path="/Womens-Shoes" element={<Womens_Shoes />} />
        <Route path="/Womens-Watches" element={<Womens_Watches />} />
      </Route>
    </Routes>
  )
}
