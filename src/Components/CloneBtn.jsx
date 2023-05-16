import { v4 as uuidv4 } from "uuid";

function CloneBtn({ setSq, sq }) {
  const cloneHandler = () => {
    // const clone = sq.find((s) => s.id === sq.id);
    setSq((s) => [...s, { ...sq, id: uuidv4() }]);
  };
  return (
    <button className="btn-small" onClick={cloneHandler}>
      Clone
    </button>
  );
}

export default CloneBtn;
