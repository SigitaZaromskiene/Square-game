import { v4 as uuidv4 } from "uuid";

const WhiteBackBtn = ({ setSq }) => {
  const whiteBackHandler = () => {
    setSq((sq) => [...sq, { color: "#fff", id: uuidv4() }]);
  };

  return (
    <button className="button red" onClick={whiteBackHandler}>
      White background
    </button>
  );
};

export default WhiteBackBtn;
