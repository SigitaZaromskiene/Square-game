import randomColor from "../Functions/RandomColor";

function RandomColorBtn({ setSq }) {
  const changeColorHandler = () => {
    setSq((sq) => [...sq, { color: randomColor() }]);
  };
  return (
    <button className="button blue" onClick={changeColorHandler}>
      Random background
    </button>
  );
}

export default RandomColorBtn;
