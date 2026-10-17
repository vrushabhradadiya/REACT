import React, { useEffect, useState } from 'react'
import Item_img from '../Singleitems/Item_img'
import { RiStarSFill, RiArrowDownLine, RiShoppingCart2Line } from '@remixicon/react'
import { useParams } from 'react-router-dom'

export default function Single_Item_com() {
    let [Single, SetSingle] = useState()
    let [Loading, SetLoading] = useState(true)

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(D => { SetSingle(D) })
            .finally(() => {
                SetLoading(false)
            })

    }, [id]);

    if (Loading) {
        return (
            <h2 className="text-xl text-center font-semibold">
                Loading product...
            </h2>
        )
    }
    else {


        return (
            <>

                <div className='w-full flex '>
                    <div className='w-[40%]  flex justify-center  flex-wrap  gap-3.5 px-3.5'>

                        {Single.images.map((v, i) => {
                            return (
                                <div key={i}>
                                    <Item_img values={v} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-[60%] flex flex-col gap-2 '>
                        <div className='flex flex-col gap-3'>
                            <div className='font-semibold'>
                                Launch Year: <span className='font-normal'>2026</span>
                            </div>
                            <div className='flex gap-2'>
                                <button className='py-2 px-3 border-[1px] rounded-lg border-[#dadada]'>2025</button>
                                <button className='py-2 px-3 border-[1px] rounded-lg border-[#dadada]'>2026</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-blue-600 font-bold'>
                                Visit brand store
                            </div>
                            <div className='capitalize  font-medium text-lg leading-5'>
                                {Single.description}
                            </div>
                            <div>
                                <div className='flex items-center gap-0.5 bg-[#F5F5F5] rounded-lg w-fit p-1 px-1.5 '>4.5 <span className='inline-block'><RiStarSFill size={14} /></span> <span className='pr-1'>| </span><span>43,323</span>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div><span className="font-medium">Depth:</span> {Single.dimensions.depth}</div>
                                <div><span className="font-medium">Height:</span> {Single.dimensions.height}</div>
                                <div><span className="font-medium">Width:</span> {Single.dimensions.width}</div>
                            </div>
                            <div>
                                <div>Top Discount of the Sale</div>
                                <div className='flex items-center gap-1.5  text-[#008042]'>
                                    <span className=''><RiArrowDownLine size={25} /></span>
                                    <span className='text-3xl font-bold -ms-2'> {`%${Single.discountPercentage}`}</span>
                                    <span className='line-through text-3xl '>{ }</span>
                                    <span className='text-3xl text-black font-bold'>${Single.price}</span>
                                </div>
                            </div>
                               <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700 border border-green-200">
                                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                        In Stock
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        Ready to ship
                                    </span>
                                </div>
                            <div className='flex items-center gap-3'>
                                <button className='p-3 border-[#dadada] border rounded-xl'>
                                    <RiShoppingCart2Line />
                                </button>
                                <button className='bg-yellow-300 rounded-xl  px-8 py-2 text-center'>
                                    <span className='font-medium text-lg pr-2 m-0 '>Buy now at</span>
                                    <span className='font-medium   m-0 inline-block'> ${Single.price}</span>
                                </button>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
