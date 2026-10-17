import React from 'react'
import Carts_Item from './Carts_item'
import Cart_price from './Cart_price'

export default function Cart() {
    return (
        <>
        
            <div className="flex w-full gap-3 bg-[#F1F2F4]  ">
                <div className='scroll-auto w-[65%] ml-9 ' >
                    <Carts_Item />
                    <Carts_Item />
                    <Carts_Item />
                    <Carts_Item />
                    <Carts_Item />
                    <Carts_Item />
                </div>
                <div className='w-[35%] sticky top-0 ms-3 h-fit'>

                    <p className='bg-transparent text-2xl capitalize font-medium py-5'>price details</p>
                    <div className='  bg-white '>
                        <Cart_price className="" />
                    </div>
                </div>
            </div>
        </>
    )
}
