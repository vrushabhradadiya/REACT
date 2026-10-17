import { RiStarSFill, RiStarHalfSFill, RiInboxArchiveLine, RiDeleteBinLine, RiFlashlightLine } from "@remixicon/react";

export default function Carts_Item() {
    return (
        <>
            <div className="w-full bg-white shadow-sm  my-3">
                <div className="border-b border-gray-200 p-6">
                    <div className="mb-4 inline-block rounded-sm bg-green-50 px-2 py-1 text-lg text-green-700">
                        Lowest Price in the year
                    </div>
                    <div className="flex  gap-5 ">
                        <div className="flex h-[110px] w-[122px] shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-200">
                            <img
                                src="https://rukminim2.flixcart.com/image/144/144/xif0q/tv-mount/e/x/d/23-heavy-duty-dual-arm-tv-wall-mount-for-23-to-55-inch-led-lcd-original-imahq8fyk9u6fpsp.jpeg?q=60" alt="#"
                                className="h-full w-full object-contain p-2"
                            />
                        </div>
                        <div className="">
                            <h2 className="truncate text-xl font-normal text-black mr-3">
                                Unico Heavy Duty Dual Arm TV Wall Mount for 23 to 55 Inch
                                LED/LCD ...
                            </h2>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                                <div className="flex items-center text-green-700">
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarHalfSFill />
                                </div>
                                <span className="text-lg text-green-600">4.2</span>
                                <span className="text-gray-400">•</span>
                                <span className="font-semibold text-gray-500">(546)</span>
                                <span className="font-bold italic text-blue-800">
                                    🛡️ Assured
                                </span>
                            </div>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <span className="text-xl font-semibold text-green-700">
                                    ↓72%
                                </span>
                                <span className="text-xl font-semibold text-gray-400 line-through">
                                    ₹4,999
                                </span>
                                <span className="text-xl font-bold text-gray-800">
                                    ₹1,392
                                </span>
                            </div>
                            <div className="mt-4">
                                <select
                                    defaultValue="1"
                                    aria-label="Quantity"
                                    className="cursor-pointer rounded border border-gray-300 bg-white px-3 py-3 text-base outline-none focus:border-blue-500"
                                >
                                    {[1, 2, 3, 4, 5].map((qty) => (
                                        <option key={qty} value={qty}>
                                            Qty: {qty}
                                        </option>
                                    ))}xz
                                </select>
                            </div>
                            <p className="mt-5 text-base text-gray-800">
                                Delivery by Thu Oct 15
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 divide-y   divide-gray-200 ">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold text-gray-500 transition hover:bg-gray-50"
                    >
                        <RiInboxArchiveLine className="text-base" />
                        Save for later
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold text-gray-500 transition hover:bg-gray-50"
                    >
                        <RiDeleteBinLine className="text-base" />
                        Remove
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-3 px-4   py-3 text-lg font-semibold text-gray-500 transition hover:bg-gray-50"
                    >
                        <RiFlashlightLine className="text-base" />
                        Buy this now
                    </button>
                </div>
            </div>
        </>
    );
}