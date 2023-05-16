import randomColor from "../Functions/RandomColor";
import { v4 as uuidv4 } from "uuid";

function RandomColorBtn({ setSq }) {
  const changeColorHandler = () => {
    setSq((sq) => [...sq, { color: randomColor(), id: uuidv4() }]);
  };
  return (
    <button className="button blue" onClick={changeColorHandler}>
      Random background
    </button>
  );
}

export default RandomColorBtn;
