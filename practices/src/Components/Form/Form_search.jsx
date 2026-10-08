import React, { useEffect, useState } from 'react'
import Form_component from "./Form_component"
import { RiSearchLine, RiCloseCircleFill } from "@remixicon/react";
export default function Form_search({ Data, Find, SetFind, SetData, SetFname, SetLname, SetAge, SetGender, SetEmail, SetPassword, SetCity, SetAddress, SetUpdate, SetUpindex }) {
    let [Search, SetSearch] = useState("")
    let [Arr, SetArr] = useState([])

    let find = () => {
        if (Search.trim() === "") {
            SetFind(false)
            SetArr([])
        }
        if (Search !== "") {
            SetFind(true)
            let temp = []
            Data.map((data, index) => {
                if (data.Fname.toLowerCase().includes(Search.trim().toLowerCase()) || data.Lname.toLowerCase().includes(Search.trim().toLowerCase())) {
                    temp.push(index)
                }
            })
            SetArr(temp)
        }

    }

    useEffect(() => {
        find()
    }, [Search])
    return (
        <>
            {/* <form action=""> */}
            <div className='px-7 py-2'>
                <div className="w-full gap-3 bg-[#DADAD3] flex rounded-2xl p-1.5 items-center" >
                    <div>
                        <RiSearchLine color='#62625B' size={22} />
                    </div>
                    <div className='w-full'>
                        <input type="text"
                            className='w-full outline-none bg-transparent'
                            value={Search}
                            onChange={(e) => {
                                SetSearch(e.target.value)
                            }}

                        />
                    </div>
                    {Search
                        &&
                        <div className="">
                            <RiCloseCircleFill color='#62625B'
                                onClick={() => {
                                    SetSearch("")
                                    SetFind(false)

                                }} />
                        </div>
                    }
                </div>
            </div>
            {Find && <div>
                <div className="flex items-center w-full h-10 px-4 border-b border-gray-200">
                    <div className="w-[5%] text-[#888] uppercase text-center">
                        No
                    </div>
                    <div className="w-[18%] text-[#888] uppercase">
                        Name
                    </div>
                    <div className="w-[8%] text-[#888] uppercase text-center">
                        Age
                    </div>
                    <div className="w-[8%] text-[#888] uppercase text-center">
                        Gender
                    </div>
                    <div className="w-[12%] text-[#888] uppercase text-center">
                        City
                    </div>
                    <div className="w-[17%] text-[#888] uppercase text-center">
                        Email
                    </div>
                    <div className="w-[20%] text-[#888] uppercase">
                        Address
                    </div>
                    <div className="ml-auto w-[12%] text-[#888] uppercase text-center">
                        Action
                    </div>
                </div>
                {Arr.map((v, i) => {
                    return (
                        <Form_component
                            key={i}
                            value={Data[v]}
                            idx={i}
                            Data={Data}
                            SetData={SetData}
                            SetFname={SetFname}
                            SetLname={SetLname}
                            SetAge={SetAge}
                            SetGender={SetGender}
                            SetEmail={SetEmail}
                            SetPassword={SetPassword}
                            SetCity={SetCity}
                            SetAddress={SetAddress}
                            SetUpdate={SetUpdate}
                            SetUpindex={SetUpindex}
                        />
                    )
                })}
            </div>}

        </>
    )
}
