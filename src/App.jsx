import "./App.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./Components/AddButton";
import RandomColorBtn from "./Components/RandomColorBtn";
import WhiteBackBtn from "./Components/WhiteBackBtn";
import Sq from "./Components/Sq";
import RandomNumBtn from "./Components/RandomNumBtn";
import ClearAllSq from "./Components/ClearAllSq";

function App() {
  const [sq, setSq] = useState([]);

  return (
    <div className="App">
      <div className="button-container">
        <AddButton setSq={setSq} />
        <RandomColorBtn setSq={setSq} />
        <WhiteBackBtn setSq={setSq} />
        <RandomNumBtn setSq={setSq} />
        <ClearAllSq setSq={setSq} />
      </div>
      <div className="sq-container">
        {sq.map((sq, i) => (
          <Sq key={uuidv4()} index={i} sq={sq} setSq={setSq} />
        ))}
      </div>
    </div>
  );
}

export default App;
