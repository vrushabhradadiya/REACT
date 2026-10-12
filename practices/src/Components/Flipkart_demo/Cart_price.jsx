import React from 'react'

export default function Cart_price() {
    return (
        <div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-5">
                    <p className="text-xl underline decoration-dotted underline-offset-4">
                        Price (2 items)
                    </p>
                    <p className="text-xl">₹79,989</p>
                </div>

                <div className="flex justify-between items-center mb-5">
                    <p className="text-xl">Discount</p>
                    <p className="text-xl text-green-600">- ₹38,497</p>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <p className="text-xl underline decoration-dotted underline-offset-4">
                        Buy more &amp; save more
                    </p>
                    <p className="text-xl text-gray-500">- ₹1,000</p>
                </div>

                <div className="border-t border-dashed border-gray-200 mb-8"></div>

                <div className="border-t border-gray-200 pt-7 flex justify-between items-center mb-5">
                    <p className="text-lg font-serif">Total Amount</p>
                    <p className="text-lg font-serif">₹40,492</p>
                </div>

                <div className="flex items-center justify-center gap-2 bg-[#D9F9EE] text-green-700 rounded-xl py-3 px-2">
                    <span className="text-2xl">❖</span>
                    <p className="text-lg">
                        You'll save <span className="font-bold">₹39,497</span> on this
                        order!
                    </p>
                </div>
            </div>
        </div>

    )
}
