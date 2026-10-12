import React, { useEffect, useState } from 'react'
import RestComponent from './RestComponent'

export default function RestApi() {
  let [Data, SetData] = useState([])

  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/character").then(data => data.json()).then(d => {
      SetData(d.results)
    })

  }, [])
  return (
    <>
        
      <div className='grid gap-3 px-4 py-9 grid-cols-2 bg-[#272B33]'>
        {Data.map((value,i)=>{
          return(
            <div key={i}>
              <RestComponent value={value} />
            </div>
          )
        })}
      </div>
    </>
  )
}
