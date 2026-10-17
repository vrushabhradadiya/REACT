import { useEffect, useState } from 'react'
import Filpkart_Header from '../AllComponents/Flipkart_Header'
import Multipal_item from '../AllComponents/Multipal_item'
import Sidebar from '../Filter/Sidebar'
import Paginations from '../AllComponents/Paginations'

export default function Home() {
  let [Items, SetItems] = useState([])
  let [Skip, SetSkip] = useState(0)
  let [Total, SetTotal] = useState(10)
  let [Limit, SetLimit] = useState(5)
  let [Temp, SetTemp] = useState(true)
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${Limit}&skip=${Skip}`)
      .then(res => res.json())
      .then(d => {
        SetItems(d.products)
        SetTotal(d.total);
      })
      .catch((err) => console.log(err))
      .finally(() => SetTemp(false)),

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      
    }, [Skip])
    
    if (Temp) {
      return (
        <>
        <Filpkart_Header />
        <h1 className='text-center font-semibold text-2xl' >Loading..</h1>
      </>
    )
  }
  else {
    console.log(Items);
    return (
      <>
        <Filpkart_Header />
        <div className='flex bg-[#F1F3F6]  gap-2 py-2 px-2'>
          <div>
            <Sidebar />
          </div>
          <div>
            {
              Items.map((data, idx) => {
                return (
                  <Multipal_item key={idx} idx={idx} Value={data} />
                )
              })
            }
            <Paginations
              Total={Total}
              SetSkip={SetSkip}
              Limit={Limit}
            />
          </div>
        </div>
      </>
    )
  }
}
