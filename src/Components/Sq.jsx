function Sq({ index, sq, setSq }) {
  const deleteBtnHandler = () => {
    setSq((s) => s.filter((s) => s.id !== sq.id));
  };

  const spinBtnHandler = () => {
    setSq([...sq, { spin: true }]);
  };
  return (
    <div
      className="sq"
      style={{ backgroundColor: sq.color + "70", borderColor: sq.color }}
    >
      {index}
      <div>
        <button className="btn-small" onClick={deleteBtnHandler}>
          Delete
        </button>
        <button className="btn-small spin" onClick={spinBtnHandler}>
          Spin
        </button>
      </div>
    </div>
  );
}

export default Sq;
