
import { RiSearchLine, RiAccountPinCircleLine, RiShoppingCartLine } from "@remixicon/react"
import { Link } from "react-router-dom";

export default function Item_Header() {
  return (
    <div className="flex w-full items-center gap-12 bg-white px-8 py-3">
      <Link to={"/"} className="flex shrink-0 items-center text-decoration-none  gap-3 rounded-2xl bg-yellow-300 px-8 py-1.5">
        <span className="text-xl font-bold text-blue-700">
          f
        </span>

        <span className="text-lg font-bold italic text-blue-800">
          Flipkart
        </span>
      </Link>

      <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border-2 border-blue-400 px-6 py-1.5">
        <RiSearchLine
          size={25}
          className="shrink-0 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search for products"

          className="w-full bg-transparent text-lg outline-none"
        />
      </div>

      <div className="flex shrink-0 items-center gap-3 text-lg">
        <RiAccountPinCircleLine size={25} />
        <span>Login</span>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-lg">
        <span>More</span>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-lg">
        <RiShoppingCartLine />
        <span>Cart</span>
      </div>
    </div>
  );
}
