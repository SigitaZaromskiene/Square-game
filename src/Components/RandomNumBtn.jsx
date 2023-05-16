import RandomNum from "../Functions/RandomNum";

function RandomNumBtn({ setSq, index }) {
  const randomNumHandler = () => {
    setSq((sq) => [...sq, { index: index % 2 ? "red" : null }]);
  };
  return (
    <button className="button pink" onClick={randomNumHandler}>
      Random number
    </button>
  );
}

export default RandomNumBtn;
