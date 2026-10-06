import { useState } from "react";
import  styles from "./css/styless.module.css";

export default function Mo_Calculator() {
  const [Display, setDisplay] = useState("0");
  const [First, setFirst] = useState(null);
  const [Sign, setSign] = useState(null);
  const [Ans, setAns] = useState(null);
  const [status, setStatus] = useState(true);

  let NumberHandle = (value) => {
    if (status) {
      Display == "0" ? setDisplay(value) : setDisplay(String(Display).concat(value))

    }
    else {
      setDisplay('')
      setStatus(true)
    }
  }
  let SignHandle = (value) => {
    setFirst(Display);
    setSign(value);
    setDisplay("")
  }
  let equalHandle = () => {
    if (Sign == "+") {
      setStatus(false)
      setDisplay(parseFloat(First) + parseFloat(Display))
    }
    if (Sign == "-") {
      setDisplay(parseFloat(First) - parseFloat(Display))
    }
    if (Sign == "*") {
      setDisplay(parseFloat(First) * parseFloat(Display))
    }
    if (Sign == "/") {
      setDisplay(parseFloat(First) / parseFloat(Display))
    }
  }
  let ClearHandler = (value) => {
    if (value == "ce" || value == "e") {
      setDisplay("")
    }
    if (value = "c") {
      setDisplay("0")
      setFirst(null)
      setSign(null)
      setAns(null)
    }
  }
  let EHandler = () => {
    setDisplay(Display.slice(0, Display.length - 1));
  }
  return (
    <div>

      <div className="main">
        <h1>Calculator</h1>

        <div className="container">
          <input type="text" className="display" value={Display} readOnly />

          <div className="button">
            <div className="row1">
              <input type="button" onClick={(e) => { SignHandle(e.target.value) }} className="btn sign" value="/" />
              <input type="button" onClick={EHandler} className="btn e" value="E" />
              <input type="button" onClick={(e) => { ClearHandler(e.target.value) }} className="btn ce" value="CE" />
              <input type="button" onClick={(e) => { ClearHandler(e.target.value) }} className="btn c" value="C" />
            </div>

            <div className="row2">
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="7" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="8" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="9" />
              <input type="button" onClick={(e) => { SignHandle(e.target.value) }} className="btn sign" value="*" />
            </div>

            <div className="row3">
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="4" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="5" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="6" />
              <input type="button" onClick={(e) => { SignHandle(e.target.value) }} className="btn sign" value="-" />
            </div>

            <div className="row4">
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="1" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="2" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="3" />
              <input type="button" onClick={(e) => { SignHandle(e.target.value) }} className="btn sign" value="+" />
            </div>

            <div className="row5">
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="00" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="0" />
              <input type="button" onClick={(e) => { NumberHandle(e.target.value) }} className="btn num" value="." />
              <input type="button" onClick={equalHandle} className="btn" id="equal" value="=" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}