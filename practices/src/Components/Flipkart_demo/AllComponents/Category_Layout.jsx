import { Outlet } from 'react-router-dom'
import Sidebar from '../Filter/Sidebar'
import Filpkart_Header from './Flipkart_Header'

export default function Category_Layout() {
  return (
    <>
      <Filpkart_Header />

      <div className="flex bg-[#F1F3F6] gap-2 py-2 px-2">
        <div className="shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>
    </>
  )
}