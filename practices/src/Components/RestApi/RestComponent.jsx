import React from 'react'
import { RiCheckboxBlankCircleFill } from "@remixicon/react"
export default function RestComponent(props) {
    let { image, status, species, name, location, origin } = props.value
    console.log(props.value);

    return (
        <>

            <div className='flex  bg-[#3C3E44] h-[220px] w-full rounded-xl overflow-hidden'>
                <div>
                    <img src={image} className='h-full w-full' alt="" />
                </div>
                <div className='flex flex-col justify-between py-4 px-3' >
                    <div className='flex flex-col'>
                        <div className='text-2xl font-extrabold text-white '>{name}</div>
                        <div className='flex items-center gap-2'>
                            <RiCheckboxBlankCircleFill size={10} color='#55CC44' />
                            <span className='text-white '>{`${status} - ${species}`}</span>
                        </div>
                    </div>
                    <div>
                        <div className='text-[#aaa]' >Last known location:</div>
                        <a href="#" className='text-white text-lg'>
                            {origin.name}
                        </a>
                    </div>
                    <div>
                        <div className='text-[#aaa]'>First seen in:</div>
                        <div className='text-white text-lg'>{location.name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
