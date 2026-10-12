import { RiPokerHeartsFill, RiStarFill } from "@remixicon/react"

export default function Flipkart_search_com() {
    return (
        <>
            <div className=' border-b-[1px] border-[#dadada] py-6 bg-white flex w-full '>
                <div className="relative px-2 w-[30%]  ">
                    <div className="bg-white  flex justify-end px-2 absolute top-2 right-1"><RiPokerHeartsFill size={16} color="#c8c8c8" /></div>
                    <div className="w-full  h-[200px] ">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/p/s/-resized-original-imahhea7zqgyrcfk.jpeg?q=70" className="object-cover" alt="" />
                    </div>
                    <div className="mt-3">
                        <input type="checkbox" name="" id="" /><span className="inline-block ms-2">Add to Compare</span>
                    </div>
                </div>
                <div className="w-[40%] ps-1 ">
                    <div className="font-medium w-full text-lg">
                        SONY BRAVIA 2 II 138.8 cm (55 inch) Ultra HD (4K) LED Smart Google TV
                    </div>
                    <div className="flex gap-2.5 items-center">

                        <div className="flex items-center gap-0.5 text-white text-sm bg-[#388E3C] w-fit rounded-sm px-1.5 py-0.5">
                            4.7 <RiStarFill className="inline-block" size={13} color="white" />
                        </div>
                        <div className="text-[#878787] font-semibold text-sm">
                            <span><span>35,094 Ratings&nbsp;</span><span class="o2SIOJ">&amp;</span><span>&nbsp;4,714 Reviews</span></span>
                        </div>
                    </div>
                    <div>
                        <ul className="list-disc marker:text-[#dadada] marker:text-sm  text-sm mt-4">
                            <li className="">Ultra HD (4K) | LED</li>
                            <li className="">Model ID: K-55S25EM2 </li>
                            <li className="">Launch Year: 2025</li>
                            <li className="">Total Sound Output: 20 W</li>
                            <li className="">2 Year comprehensive warranty on product provided by the brand from the date of purchase including remote for technical issue(Offer Valid All India purchased between 1st Oct26 to 10th Nov26)</li>
                        </ul>
                    </div>


                </div>
                
                <div className=" w-[30%]">
                    <div className="flex items-center gap-6">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            ₹43,999
                        </h2>

                        <div className="flex items-center gap-1 text-blue-800">
                            <span className="text-2xl">🛡️</span>
                            <span className="text-sm font-bold italic">Assured</span>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                        <span className="text-sm text-gray-500 line-through">
                            ₹69,999
                        </span>

                        <span className="text-sm font-semibold text-green-600">
                            37% off
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
