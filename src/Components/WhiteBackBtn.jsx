import { v4 as uuidv4 } from "uuid";
import RandomNum from "../Functions/RandomNum";

const WhiteBackBtn = ({ setSq }) => {
  const whiteBackHandler = () => {
    setSq((sq) => [
      ...sq,
      { color: "#fff", id: uuidv4(), number: RandomNum(1, 999), show: true },
    ]);
  };

  return (
    <button className="button red" onClick={whiteBackHandler}>
      White background
    </button>
  );
};

export default WhiteBackBtn;
