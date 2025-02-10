import { useState } from "react";
import TimeThing from "./timeThing";
import "./App.css";

function App() {
  const [minute, setMinute] = useState(59);
  const [second, setSecond] = useState(30);

  const setMin = (value) => {
    setMinute(value);
  };
  const setSec = (value) => {
    setSecond(value);
  };

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
