const StopSpinAllBtn = ({ setSq }) => {
  const stopSpinHandler = () => {
    setSq((s) => s.map((s) => ({ ...s, spin: false })));
  };
  return (
    <button className="button pink" onClick={stopSpinHandler}>
      Stop Spin
    </button>
  );
};

export default StopSpinAllBtn;
