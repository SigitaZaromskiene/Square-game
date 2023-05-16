import { v4 as uuidv4 } from "uuid";

function AddButton({ setSq }) {
  const addSqHandler = () => {
    setSq((sq) => [...sq, { id: uuidv4(), spin: false }]);
  };

  return (
    <button className="button green" onClick={addSqHandler}>
      New
    </button>
  );
}

export default AddButton;
