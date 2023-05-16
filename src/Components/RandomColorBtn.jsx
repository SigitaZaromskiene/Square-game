import randomColor from "../Functions/RandomColor";
import { v4 as uuidv4 } from "uuid";
import RandomNum from "../Functions/RandomNum";

function RandomColorBtn({ setSq }) {
  const changeColorHandler = () => {
    setSq((sq) => [
      ...sq,
      {
        color: randomColor(),
        id: uuidv4(),
        number: RandomNum(1, 999),
        show: true,
      },
    ]);
  };
  return (
    <button className="button blue" onClick={changeColorHandler}>
      Random background
    </button>
  );
}

export default RandomColorBtn;
