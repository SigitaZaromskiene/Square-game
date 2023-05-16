import "./App.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./Components/AddButton";
import RandomColorBtn from "./Components/RandomColorBtn";
import WhiteBackBtn from "./Components/WhiteBackBtn";
import RandomNumBtn from "./Functions/RandomNum";
import Sq from "./Components/Sq";

function App() {
  const [sq, setSq] = useState([]);

  return (
    <div className="App">
      <div className="button-container">
        <AddButton setSq={setSq} />
        <RandomColorBtn setSq={setSq} />
        <WhiteBackBtn setSq={setSq} />
        <RandomNumBtn setSq={setSq} />
      </div>
      <div className="sq-container">
        {sq.map((sq, i) => (
          <Sq key={uuidv4()} index={i} sq={sq} />
        ))}
      </div>
    </div>
  );
}

export default App;
