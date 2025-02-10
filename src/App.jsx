import { useState, useEffect } from "react";
import TimeThing from "./timeThing";
import "./App.css";

function App() {
  const [minute, setMinute] = useState(25);
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);

  function setMin(value) {
    setMinute(value);
  }
  function setSec(value) {
    setSecond(value);
  }
  useEffect(() => {
    if (running) {
      runTimePiece();
    }
  });

  function runTimePiece() {
    setInterval(() => {
      if (second === 0) {
        if (minute === 0) {
          clearInterval();
        } else {
          setMinute(minute - 1);
        }
      }
      setSecond(second === 0 ? 59 : second - 1);
      !running && clearInterval();
      console.log(minute, second);
    }, 1000);
  }

  return (
    <div className="container">
      <div className="timePiece">
        <TimeThing data={minute} setFunction={setMin} />
        <span className="separator">:</span>
        <TimeThing data={second} setFunction={setSec} />
        <button
          onClick={() => {
            runTimePiece();
            setRunning(running ? false : true);
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default App;
