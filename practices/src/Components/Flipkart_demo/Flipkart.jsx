import React from 'react'
import Flipkart_Header from './Flipkart_Header'
import Flipkart_search_com from './Flipkart_search_com'
import Sidebar from './Sidebar'
import Item_header from './Item_header'
import Item_component from './Item_component'
import Carts_Item from './Carts_item'
import Cart from './Cart'

export default function Flipkard() {
  return (
    <>
      {/* <Flipkart_Header /> */}
      {/* <div className='flex bg-[#eaeaea]'>
        <div>
          <Sidebar />
        </div>
        <div className='w-full'>
          <Flipkart_search_com />
        </div>
      </div> */}
      <Item_header />
      {/* <Flipkart_item/> */}
      {/* <div className='w-full'>

        <Item_component />
      </div> */}
      <Cart/>
    </>
  
  )
}
