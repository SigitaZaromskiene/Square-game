import RandomNum from "../Functions/RandomNum";

function RandomNumBtn({ setSq, sq }) {
  const randomNumHandler = () => {
    setSq((sq) => [...sq, { ...sq, id: RandomNum(1, 999) }]);
  };
  return (
    <button className="button pink" onClick={randomNumHandler}>
      Random number
    </button>
  );
}

export default RandomNumBtn;
