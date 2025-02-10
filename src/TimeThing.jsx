import "./TimeThing.css";

export default function TimeThing({ data, setFunction }) {
  return (
    <>
      <div className="piece">
        <button onClick={() => setFunction(data > 0 ? data - 1 : 59)}>
          🔺
        </button>
        <h2>{data < 10 ? "0" + data : data}</h2>
        <button onClick={() => setFunction(data < 59 ? data + 1 : 0)}>
          🔻
        </button>
      </div>
    </>
  );
}
