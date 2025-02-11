import "./TimeThing.css";

export default function TimeThing({ data, setFunction, running }) {
  return (
    <>
      <div className="piece">
        <button
          disabled={running}
          onClick={() => setFunction(data < 59 ? data + 1 : 0)}
        >
          ▲
        </button>
        <h2>{data < 10 ? "0" + data : data}</h2>
        <button
          disabled={running}
          onClick={() => setFunction(data > 0 ? data - 1 : 59)}
        >
          ▼
        </button>
      </div>
    </>
  );
}
