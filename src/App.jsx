import ClockSegment from "./ClockSegment";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ClockSegment min={25}>Focus</ClockSegment>
      <ClockSegment min={5}>Short Break</ClockSegment>
      <ClockSegment min={15}>Long Break</ClockSegment>
      <ClockSegment min={15}>Long Break</ClockSegment>
    </div>
  );
}

export default App;
