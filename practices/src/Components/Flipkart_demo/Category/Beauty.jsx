import { useEffect, useState } from 'react'
import Sidebar from '../Filter/Sidebar'
import Filpkart_Header from '../AllComponents/Flipkart_Header'
import Multipal_item from '../AllComponents/Multipal_item'

export default function Beauty() {
  let [Loading, SetLoading] = useState(true)
  let [Data, SetData] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((item) => {SetData(item.products) })
      .catch((err) => console.log(err))
      .finally(() => { SetLoading(false)})
       
  }, [])

  if (Loading) {
    return (
      <>
        
        <h1 className='text-center text-3xl  font-semibold mt-5  '>Loading...</h1>
      </>
    )
  }
  {console.log(Data)}
  return (
    <>
    {Data.map((value, idx) => (
        <Multipal_item
          Value={value}
          key={value.id}
          idx={idx}
        />
      ))}
    </>
  )
}
