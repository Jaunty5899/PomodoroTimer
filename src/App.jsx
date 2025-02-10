import { useState } from "react";
import TimeThing from "./timeThing";
import "./App.css";

function App() {
  const [minute, setMinute] = useState(59);
  const [second, setSecond] = useState(5);

  function setMin(value) {
    setMinute(value);
  }
  function setSec(value) {
    setSecond(value);
  }

  // function runSeconds() {
  setInterval(() => {
    if (second === 0) {
      if (minute === 0) {
        clearInterval();
      } else {
        setMinute(minute - 1);
      }
    }
    setSecond(second === 0 ? 59 : second - 1);
  }, 1000);
  // }

  return (
    <div className="container">
      <div className="timePiece">
        <TimeThing data={minute} setFunction={setMin} />
        <span className="separator">:</span>
        <TimeThing data={second} setFunction={setSec} />
      </div>
    </div>
  );
}

export default App;
