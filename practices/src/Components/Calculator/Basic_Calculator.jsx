import { useState } from "react"

export default function Calculator() {
  let [Number1, SetNumber1] = useState("")
  let [Number2, SetNumber2] = useState("")
  let [Ans, SetAns] = useState("")

  return (
    <>
      <h2 className="text-center capitalize mt-3 text-2xl w-fit mx-auto px-3 py-1 rounded-3xl bg-amber-300">
        basic Calculator
      </h2>

      <table className="mx-auto mt-5 border border-gray-400 bg-white">
        <tbody>
          <tr>
            <td className="border border-gray-300">
              Number 1
            </td>

            <td colSpan={3} className="border border-gray-300">
              <input
                value={Number1}
                onChange={(e) => {
                  SetNumber1(e.target.value)
                }}
                type="text"
                className="bg-amber-50 border border-gray-300 rounded outline-none"

              />
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              Number 2
            </td>

            <td colSpan={3} className="border border-gray-300">
              <input type="text"
                value={Number2}
                onChange={(e) => {
                  SetNumber2(e.target.value)
                }}
                className="bg-amber-100 border border-gray-300 rounded outline-none"
              />
            </td>
          </tr>

          <tr>
            <td>
              Ans
            </td>
            <td colSpan={3} className="border border-gray-300">
              <input type="text"
                value={Ans}
                readOnly
                className="bg-amber-50 border border-gray-300 rounded w-full outline-none" />
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              <button className="bg-blue-500 p-1 w-full text-white rounded"
                onClick={() => { SetAns(parseInt(Number1) + parseInt(Number2)) }}
              >
                Sum
              </button>
            </td>

            <td className="border border-gray-300">
              <button className="bg-red-500 p-1 w-full text-white rounded"
                onClick={() => { SetAns(parseInt(Number1) - parseInt(Number2)) }}>
                Sub
              </button>
            </td>

            <td className="border border-gray-300">
              <button className="bg-green-500 p-1 w-full text-white rounded"
                onClick={() => { SetAns(parseInt(Number1) * parseInt(Number2)) }}>
                Mul
              </button>
            </td>

            <td className="border border-gray-300">
              <button className="bg-purple-500 p-1 w-full text-white rounded"
                onClick={() => { SetAns(parseInt(Number1) / parseInt(Number2)) }}>
                Div
              </button>
            </td>
          </tr>
        </tbody>
      </table >
    </>
  )
}