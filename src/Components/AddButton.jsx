import { v4 as uuidv4 } from "uuid";
import RandomNum from "../Functions/RandomNum";

function AddButton({ setSq }) {
  const addSqHandler = () => {
    setSq((sq) => [
      ...sq,
      { id: uuidv4(), spin: false, number: RandomNum(1, 999) },
    ]);
  };

  return (
    <button className="button green" onClick={addSqHandler}>
      New
    </button>
  );
}

export default AddButton;
