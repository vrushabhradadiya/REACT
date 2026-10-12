import React from 'react'
import Item_img from './Item_img'
import { RiStarSFill, RiArrowDownLine, RiShoppingCart2Line } from '@remixicon/react'
export default function Item_component() {
    return (
        <>
            <div className='w-full flex '>
                <div className='w-[60%] grid-cols-2 grid gap-3.5 px-3.5'>
                    <div>
                        <Item_img />
                    </div>
                    <div>
                        <Item_img />
                    </div>
                    <div>
                        <Item_img />
                    </div>
                </div>
                <div className='w-[40%]  '>
                    <div className='flex flex-col gap-3'>
                        <div className='font-semibold'>
                            Launch Year: <span className='font-normal'>2026</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='py-2 px-3 border-[1px] rounded-lg border-[#dadada]'>2025</button>
                            <button className='py-2 px-3 border-[1px] rounded-lg border-[#dadada]'>2026</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <div className='text-blue-600 font-bold'>
                            Visit brand store
                        </div>
                        <div className='capitalize  font-medium text-lg leading-5'>
                            Samsung 80 cm (32 inch) HD Ready LED Smart Tizen TV 2026 Edition with Voice Assistance Remote Control 150+ Free Channels HDR 10+ Support PurColor Samsung Knox Security Object Tracking Sound Lite Adaptive Sound Q-Symphony (UA32H4600FUXXL)
                        </div>
                        <div>
                            <div className='flex items-center gap-0.5 bg-[#F5F5F5] rounded-lg w-fit p-1 px-1.5 '>4.5 <span className='inline-block'><RiStarSFill size={14} /></span> <span className='pr-1'>| </span><span>43,323</span>
                            </div>
                        </div>
                        <div>
                            <div>Top Discount of the Sale</div>
                            <div className='flex items-center gap-1.5  text-[#008042]'>
                                <span><RiArrowDownLine size={20} /></span>
                                <span className='text-3xl font-bold -ms-2'> 31%</span>
                                <span className='line-through text-3xl '>20,900</span>
                                <span className='text-3xl text-black font-bold'>₹14,490</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <button className='p-3 border-[#dadada] border rounded-xl'>
                                <RiShoppingCart2Line />
                            </button>
                            <button className='border border-[#dadada] rounded-xl px-8 text-center leading-5 '>
                                <span className='font-medium text-lg'>Buy with EMI</span>
                                <span className='text-taupe-600 inline-block'>From ₹1,883/m</span>
                            </button>
                            <button className='bg-yellow-300 rounded-xl  px-8  text-center'>
                                <span className='font-medium text-lg p-0 m-0 '>Buy now at</span>
                                <span className='font-medium  p-0 m-0 inline-block'> ₹ 11,299 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
