import { RiSearchLine, RiArrowDropDownLine,RiShoppingCart2Fill } from "@remixicon/react"
export default function Filpkart_Header() {
    return (
        <>
            <div className="">
                <div className='w-full bg-[#2874F0] flex items-center gap-5 py-2 justify-center'>
                    <div>
                        <div>
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" className='h-[20px]' />
                        </div>
                        <div className='flex items-center gap-1 '>
                            <div className='italic text-white font-medium text-xs'>
                                Explore
                            </div>
                            <div className='italic font-medium text-xs text-yellow-300'>Plus</div>
                            <div><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" className='w-[12px]' alt="" /></div>

                        </div>
                    </div>
                    <div>
                        <form action="">
                            <div className='bg-white flex p-1 rounded-sm px-3.5'>
                                <div className="px-0.5">
                                    <input type="text" className="outline-none w-52"  />
                                </div>
                                <div className="px-0.5">
                                    <RiSearchLine size={22} color="blue" stroke="3" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button className="bg-white py-0.5 px-8 rounded-sm font-medium text-blue-600">Login</button>
                    </div>
                    <div className="text-white font-bold px-2">
                        <a href="#">Become a Seller</a>
                    </div>
                    <div className="">
                        <a href="#" className="text-white font-bold">
                            <span className=""> More</span>
                            <RiArrowDropDownLine className="inline-block" />
                        </a>
                    </div>
                    <div>
                        <a href="#" className="items-center text-white">
                            <RiShoppingCart2Fill  size={20}  className="inline-block"/>
                            <span>  Card</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
