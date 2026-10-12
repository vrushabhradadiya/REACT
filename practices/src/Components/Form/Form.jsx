import React, { useState } from 'react'
import Form_insert from './Form_insert'
import Form_note from './Form_note'
import Form_component from './Form_component'
import Form_search from './Form_search'

export default function Form() {
  let [Fname, SetFname] = useState("")
  let [Lname, SetLname] = useState("")
  let [Age, SetAge] = useState("")
  let [Gender, SetGender] = useState("")
  let [Email, SetEmail] = useState("")
  let [Password, SetPassword] = useState("")
  let [City, SetCity] = useState("")
  let [Address, SetAddress] = useState("")
  let [Data, SetData] = useState([])
  let [Update, SetUpdate] = useState(false)
  let [UpdateData, SetUpdateData] = useState({})
  let [Upindex, SetUpindex] = useState(null)
  let [Find, SetFind] = useState(false)
  return (
    <>
      <div className='w-full'>
        <Form_insert
          Data={Data}
          Fname={Fname}
          Lname={Lname}
          Age={Age}
          Gender={Gender}
          Email={Email}
          Password={Password}
          City={City}
          Address={Address}
          SetData={SetData}
          SetAddress={SetAddress}
          SetFname={SetFname}
          SetLname={SetLname}
          SetAge={SetAge}
          SetGender={SetGender}
          SetEmail={SetEmail}
          SetPassword={SetPassword}
          SetCity={SetCity}
          UpdateData={UpdateData}
          SetUpdateData={SetUpdateData}
          Upindex={Upindex}
          SetUpindex={SetUpindex}
          Update={Update}
          SetUpdate={SetUpdate}
        />
      </div>
      <Form_search
        Data={Data}
        Find={Find}
        SetFind={SetFind}
        SetAddress={SetAddress}
        SetFname={SetFname}
        SetLname={SetLname}
        SetAge={SetAge}
        SetGender={SetGender}
        SetEmail={SetEmail}
        SetPassword={SetPassword}
        SetCity={SetCity}
        SetUpdate={SetUpdate}
        SetUpindex={SetUpindex}
        SetData={SetData}


      />
      {Data[0] && !Find &&<div className='w-full  ' >
        <Form_note
          Data={Data}
          SetData={SetData}
          Fname={Fname}
          Lname={Lname}
          SetAddress={SetAddress}
          SetFname={SetFname}
          SetLname={SetLname}
          SetAge={SetAge}
          SetGender={SetGender}
          SetEmail={SetEmail}
          SetPassword={SetPassword}
          SetCity={SetCity}
          SetUpdate={SetUpdate}
          Find={Find}
          SetFind={SetFind}
          SetUpdateData={SetUpdateData}
          Upindex={Upindex}
          SetUpindex={SetUpindex}
        />
      </div>}
    </>
  )
}
