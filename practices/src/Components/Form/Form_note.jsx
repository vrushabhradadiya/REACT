import React from "react";
import Form_component from "./Form_component";

export default function Form_note(props) {
  const {Data,SetData,SetFname,SetLname,SetAge,SetGender,SetEmail,SetPassword,SetCity,SetAddress,SetUpdate,SetUpindex} = props;

  return (
    <div>
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

      <div>
        {Data.map((value, idx) => (
          <Form_component
            key={idx}
            value={value}
            idx={idx}

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
        ))}
      </div>
    </div>
  );
}
