import "./App.scss";
import { useState } from "react";
import randomColor from "./Functions/RandomColor";
import { v4 as uuidv4 } from "uuid";
import RandomNum from "./Functions/RandomNum";

function App() {
  const [sq, setSq] = useState([]);

  const addSqHandler = () => {
    setSq((sq) => [...sq, 1]);
  };

  const changeColorHandler = () => {
    setSq((sq) => [...sq, { color: randomColor() }]);
  };

  const whiteBackHandler = () => {
    setSq((sq) => [...sq, { color: "#fff" }]);
  };

  const randomNumHandler = () => {
    setSq((sq, i) => [...sq, { i: RandomNum() }]);
  };
  return (
    <div className="App">
      <div className="button-container">
        <button className="button green" onClick={addSqHandler}>
          New
        </button>
        <button className="button blue" onClick={changeColorHandler}>
          Random background
        </button>
        <button className="button red" onClick={whiteBackHandler}>
          White background
        </button>
        <button className="button pink" onClick={randomNumHandler}>
          Random number
        </button>
      </div>
      <div className="sq-container">
        {sq.map((sq, i) => (
          <div
            className="sq"
            key={uuidv4()}
            style={{ backgroundColor: sq.color, color: i % 2 ? "red" : null }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
