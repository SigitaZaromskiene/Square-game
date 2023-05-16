function SpinBtn({ setSq, sq }) {
  const spinBtnHandler = () => {
    setSq([...sq, { spin: true }]);
  };
  return (
    <button className="btn-small spin" onClick={spinBtnHandler}>
      Spin
    </button>
  );
}

export default SpinBtn;
