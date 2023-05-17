import "./App.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./Components/AddButton";
import RandomColorBtn from "./Components/RandomColorBtn";
import WhiteBackBtn from "./Components/WhiteBackBtn";
import Sq from "./Components/Sq";
import ClearAllSq from "./Components/ClearAllSq";
import SortBtn from "./Components/SortBtn";
import StopSpinAllBtn from "./Components/StopSpinAllBtn";
import FilterOver500 from "./Components/FilterOver500";
import DefaultSort from "./Components/DefaultSort";
import ShowAll from "./Components/ShowAll";

function App() {
  const [sq, setSq] = useState([]);

  return (
    <div className="App">
      <div className="button-container">
        <AddButton setSq={setSq} />
        <RandomColorBtn setSq={setSq} />
        <WhiteBackBtn setSq={setSq} />
        <ClearAllSq setSq={setSq} />
        <SortBtn setSq={setSq} />
        <DefaultSort setSq={setSq} />
        <StopSpinAllBtn setSq={setSq} />
        <FilterOver500 setSq={setSq} />
        <ShowAll setSq={setSq} />
      </div>
      <div className="sq-container">
        {sq.map((sq, i) =>
          sq.show ? <Sq key={uuidv4()} sq={sq} setSq={setSq} i={i} /> : null
        )}
      </div>
    </div>
  );
}

export default App;
