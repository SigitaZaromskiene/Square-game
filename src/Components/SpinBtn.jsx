function SpinBtn({ setSq, sq }) {
  const spinBtnHandler = () => {
    setSq((s) =>
      s.map((s) => (s.id === sq.id ? { ...s, spin: true } : { ...s }))
    );
  };
  return (
    <button className="btn-small" onClick={spinBtnHandler}>
      Spin
    </button>
  );
}

export default SpinBtn;
