import React from "react";

export default function Form_component(props) {
  const {value,idx,Data,SetData,SetFname,SetLname,SetAge,SetGender,SetEmail,SetPassword,SetCity,SetAddress,SetUpdate,SetUpindex} = props;

  const DeleteHandle = (index) => {    
    SetData( Data.filter((v, i) => i !== index))

  };

  const EditHandle = (index) => {
    SetFname(Data[index].Fname);
    SetLname(Data[index].Lname);
    SetAge(Data[index].Age);
    SetGender(Data[index].Gender);
    SetEmail(Data[index].Email);
    SetPassword(Data[index].Password);
    SetCity(Data[index].City);
    SetAddress(Data[index].Address);
    SetUpdate(true);
    SetUpindex(index);   
  };

  return (
    <div className="flex items-center w-full min-h-12 px-4 border-b border-gray-200">
      <div className="w-[5%] text-gray-600 text-center">
        {idx + 1}
      </div>

      <div className="w-[18%]">
        <span className="font-medium text-gray-700">
          {value.Fname} {value.Lname}
        </span>
      </div>

      <div className="w-[8%] text-gray-600 text-center">
        {value.Age}
      </div>

      <div className="w-[8%] text-gray-600 text-center">
        {value.Gender}
      </div>

      <div className="w-[12%] text-gray-600 text-center">
        {value.City}
      </div>

      <div className="w-[17%] text-gray-600 text-center break-all px-2">
        {value.Email}
      </div>

      <div className="w-[20%] text-gray-600  px-2">
        {value.Address}
      </div>

      <div className="flex items-center justify-center gap-4 ml-auto w-[12%]">
        <button
          type="button"
          onClick={() => DeleteHandle(idx)}
          className="text-gray-500 uppercase hover:text-red-500"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={() => EditHandle(idx)}
          className="text-gray-500 uppercase hover:text-blue-500"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
