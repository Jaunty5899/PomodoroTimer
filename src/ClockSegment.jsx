import { useState, useEffect } from "react";
import TimeThing from "./timeThing";
import "./ClockSegment.css";
import audio from "./assets/alarm.mp3";

export default function ClockSegment({ min, children }) {
  const [minute, setMinute] = useState({ num: min });
  const [second, setSecond] = useState({ num: 0 });
  const [running, setRunning] = useState(false);
  function setMin(value) {
    setMinute({ num: value });
  }
  function setSec(value) {
    setSecond({ num: value });
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (second.num === 0) {
        if (minute.num === 0) {
          setRunning(false);
          return () => {
            clearTimeout(timeout);
          };
        } else {
          setMinute({ num: minute.num - 1 });
        }
      }
      setSecond(second.num === 0 ? { num: 59 } : { num: second.num - 1 });
    }, 1000);
    !running && clearTimeout(timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [running, minute, second]);

  return (
    <div className={`clockContainer ${running && "active"}`}>
      <audio src={audio} autoPlay={minute == 0 && second == 0}></audio>
      <h3>{children}</h3>
      <div className="timePiece">
        <TimeThing data={minute.num} setFunction={setMin} running={running} />
        <span className="separator">:</span>
        <TimeThing data={second.num} setFunction={setSec} running={running} />
      </div>
      <button
        onClick={() => {
          setRunning(running ? false : true);
        }}
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}
