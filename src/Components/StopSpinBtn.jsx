function StopSpinBtn({ setSq, sq }) {
  const stopSpinHandler = () => {
    setSq((s) =>
      s.map((s) => (s.id === sq.id ? { ...s, spin: !s.spin } : { ...s }))
    );
  };
  return (
    <button className="btn-small" onClick={stopSpinHandler}>
      Stop
    </button>
  );
}

export default StopSpinBtn;
