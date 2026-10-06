import React from "react";

export default function Form_insert(props) {
    const { Fname, Lname, Age, Gender, Email, Password, City, Address, SetFname, SetLname, SetAge, SetGender, SetEmail, SetPassword, SetAddress, SetCity, Data, SetData, Update, SetUpdate, Upindex, SetUpindex } = props

    const clear = () => {
        SetAddress("")
        SetFname("")
        SetLname("")
        SetAge("")
        SetGender("")
        SetCity("")
        SetEmail("")
        SetPassword("")
    };

    const checkValidation = () => {
        if (Fname === "" || Lname === "" || Age === "" || Gender === "" || City === "" || Email === "" || Password === "" || Address === "") {
            return true;
        }

    };

    const dataHandler = (e) => {
        e.preventDefault();
        // if (checkValidation()) {
        //     alert("Please fill all fields");
        //     return;
        // }
        let newData = { Fname, Lname, Age, Gender, Email, Password, City, Address };


        if (Update) {
            let oldData=[...Data]
            oldData[Upindex]=newData;
            SetData(oldData);
            SetUpdate(false);
            SetUpindex(null);
            clear();
            return;
        }
        SetData([...Data, newData]);
        clear();
    };


    const cancelEdit = () => {
        clear();
        SetUpdate(false);
        SetUpindex(null);
    };

    return (
        <form onSubmit={dataHandler} className="px-12 flex flex-col gap-2 bg-[#eef] py-6"
        >
            <h1 className="text-4xl mt-3 font-medium uppercase">
                Registration Form
            </h1>

            {/* First Name + Last Name */}
            <div className="flex gap-3">
                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>First Name</legend>

                        <input
                            type="text"
                            value={Fname}
                            onChange={(e) => SetFname(e.target.value)}
                            className="w-full mb-2.5 outline-none"
                        />
                    </fieldset>
                </div>

                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>Last Name</legend>

                        <input
                            type="text"
                            value={Lname}
                            onChange={(e) => SetLname(e.target.value)}
                            className="w-full mb-2.5 outline-none"
                        />
                    </fieldset>
                </div>
            </div>


            <div className="flex gap-3">
                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>Gender</legend>

                        <select
                            value={Gender}
                            onChange={(e) => SetGender(e.target.value)}
                            className="w-full rounded-2xl mb-2.5 outline-none"
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </fieldset>
                </div>

                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>Age</legend>

                        <input
                            type="number"
                            min={3}
                            max={60}
                            value={Age}
                            onChange={(e) => SetAge(e.target.value)}
                            className="w-full mb-2.5 outline-none"
                        />
                    </fieldset>
                </div>
            </div>


            <div className="flex gap-3">
                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>City</legend>

                        <select
                            value={City}
                            onChange={(e) => SetCity(e.target.value)}
                            className="w-full mb-2.5 outline-none"
                        >
                            <option value="" disabled>
                                Select City
                            </option>

                            <option value="Surat">Surat</option>
                            <option value="Ahmadabad">Ahmadabad</option>
                            <option value="Rajkot">Rajkot</option>
                        </select>
                    </fieldset>
                </div>
            </div>


            <div className="flex gap-3">
                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>Email</legend>

                        <input
                            type="email"
                            value={Email}
                            onChange={(e) => SetEmail(e.target.value)}
                            className="w-full mb-2.5 outline-none"
                        />
                    </fieldset>
                </div>
            </div>


            <div className="flex gap-3">
                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>Password</legend>

                        <input
                            type="password"
                            value={Password}
                            onChange={(e) => SetPassword(e.target.value)}
                            minLength={8}
                            className="w-full mb-2.5 outline-none"
                        />
                    </fieldset>
                </div>
            </div>


            <div className="flex gap-3">
                <div className="w-full">
                    <fieldset className="border-[#cacaca] border-2 px-5 rounded-3xl">
                        <legend>Enter Address</legend>

                        <textarea
                            rows={3}
                            value={Address}
                            onChange={(e) => SetAddress(e.target.value)}
                            className="w-full outline-none"
                        />
                    </fieldset>
                </div>
            </div>


            <div className="flex gap-3 mt-2">
                <div className="w-full">
                    <button
                        type="submit"
                        className="w-full bg-green-700 rounded-xl text-2xl uppercase text-white py-1"
                    >
                        {Update ? "Update" : "Submit"}
                    </button>
                </div>

                <div className="w-full">

                    <button
                        type="button"
                        onClick={clear}
                        className="w-full bg-blue-600 rounded-xl text-2xl uppercase text-white py-1"
                    >
                        Reset
                    </button>

                </div>
            </div>
        </form>
    );
}