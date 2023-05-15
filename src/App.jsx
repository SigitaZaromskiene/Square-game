import "./App.scss";
import { useState } from "react";

function App() {
  const [sq, setSq] = useState([]);

  const addSqHandler = () => {
    setSq((sq) => [...sq, 1]);
  };
  return (
    <div className="App">
      <div className="button-container">
        <button className="button green" onClick={addSqHandler}>
          New
        </button>
        <button className="button blue">+1</button>
        <button className="button red">White</button>
      </div>
      <div className="sq-container">
        {sq.map((sq) => (
          <div className="sq">{sq}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
