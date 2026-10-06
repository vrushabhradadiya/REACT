import { useState } from "react"

export default function Tic() {
    const [Display, SetDisplay] = useState(["", "", "", "", "", "", "", "", ""]);
    const [Player, SetPlayer] = useState(true)
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let btnClick = (value) => {
        if (Display[value] !== "") {
            return;
        }
        let temp = [...Display];
        if (Player) {
            temp[value] = "X"
            SetDisplay(temp)
            SetPlayer(false)
        }
        else {
            temp[value] = "O"
            SetDisplay(temp)
            SetPlayer(true)
        }
        wins(temp)
    }
    let wins = (arrays) => {
        for (let i = 0; i < win.length; i++) {
            let element1 = arrays[win[i][0]]
            let element2 = arrays[win[i][1]]
            let element3 = arrays[win[i][2]]
            if (element1 != "" && element1 == element2 && element2 == element3 && element1 == element3) {
                alert(`${element1} is win`)
            }
        }
    }
    return (
        <>
            <div className='grid w-[350px] h-[350px] mt-9 mx-auto grid-cols-3 grid-rows-3'>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="0" value={Display[0]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="1" value={Display[1]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="2" value={Display[2]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="3" value={Display[3]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="4" value={Display[4]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="5" value={Display[5]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="6" value={Display[6]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="7" value={Display[7]} /></div>
                <div><input type="button" className='h-[100px] w-[100px] text-2xl rounded-2xl bg-amber-50' onClick={(e) => { btnClick(e.target.id) }} id="8" value={Display[8]} /></div>
            </div>
        </>
    )
}
