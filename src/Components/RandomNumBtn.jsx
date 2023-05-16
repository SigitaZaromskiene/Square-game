import RandomNum from "../Functions/RandomNum";

function RandomNumBtn({ setSq, index }) {
  const randomNumHandler = () => {
    setSq((sq) => [...sq, { index %2? }]);
  };
  return (
    <button className="button pink" onClick={randomNumHandler}>
      Random number
    </button>
  );
}

export default RandomNumBtn;
