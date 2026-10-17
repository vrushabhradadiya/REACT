import { RiPokerHeartsFill, RiStarFill } from "@remixicon/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';

export default function Multipal_item(props) {
    let [ImgLoading, SetImgLoading] = useState(true)
    let {
        thumbnail = "",
        title = "title",
        rating = 5,
        price = 0,
        description = "no description",
        id = 0
    } = props.Value || {}

    // { console.log(props.Value) }
    return (
        <>

            <div className=' border-b-[1px] border-[#dadada] py-2 bg-white flex w-full gap-1 '>
                <div className="relative px-2 w-[30%]">

                    {/* Heart icon */}
                    <div className="bg-white flex justify-end px-2 absolute top-2 right-1 z-10">
                        <RiPokerHeartsFill size={16} color="#c8c8c8" />
                    </div>

                    {/* Image with loading spinner */}
                    <div className="w-full h-[225px]  flex items-center justify-center relative overflow-hidden">

                        <img
                            src={thumbnail}
                            onLoad={() => SetImgLoading(false)}
                            onError={() => SetImgLoading(false)}
                            className="w-full h-full object-contain"
                            alt={title}
                        />

                        {ImgLoading && (
                            <div className="absolute inset-0  flex items-center justify-center">
                                <Spinner animation="border" variant="secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        )}

                    </div>

                    {/* Add to Compare */}
                    <div className="m-3">
                        <input type="checkbox" name="" id="" />
                        <span className="inline-block ms-2">Add to Compare</span>
                    </div>

                </div>
                <div className="w-[40%] ps-1 flex flex-col gap-1">

                    {/* onClick={() => { SetProduct(idx + 1) }} */}
                    <Link to={`/item/${id}`} className="text-decoration-none  text-secondary  text-inherit font-medium w-full  text-lg">
                        {title}
                    </Link>
                    <div className="flex gap-2.5 items-center">
                        <div className="flex items-center gap-0.5 text-white text-sm bg-[#388E3C] w-fit rounded-sm px-1.5 py-0.5">
                            {rating} <RiStarFill className="inline-block" size={13} color="white" />
                        </div>
                        <div className="text-[#878787] font-semibold text-sm">
                            <span><span>35,094 Ratings&nbsp;</span><span className="o2SIOJ">&amp;</span><span>&nbsp;4,714 Reviews</span></span>
                        </div>
                    </div>
                    <div>
                        <div className=" text-[#777] text-lg mt-4">
                            {description}
                        </div>
                    </div>
                </div>

                <div className=" w-[30%]">
                    <div className="flex items-center gap-6">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            ${price}
                        </h2>
                        <div className="flex items-center gap-1 text-blue-800">
                            <span className="text-2xl">🛡️</span>
                            <span className="text-sm font-bold italic">Assured</span>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                        <span className="text-sm text-gray-500 line-through">
                            ${(parseFloat(price) + parseFloat(price * 20 / 100)).toFixed(2)}
                        </span>

                        <span className="text-sm font-semibold text-green-600">
                            20% off
                        </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-green-600">
                        Bank Offer
                    </p>
                </div>


            </div>
        </>
    )
}
