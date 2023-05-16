function StopSpinBtn({ setSq, sq }) {
  const stopSpinHandler = () => {
    setSq((s) =>
      s.map((s) => (s.id === sq.id ? { ...s, spin: !true } : { ...s }))
    );
  };
  return (
    <button className="btn-small" onClick={stopSpinHandler}>
      Stop
    </button>
  );
}

export default StopSpinBtn;
