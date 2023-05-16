function ClearAllSq({ setSq }) {
  function clearHandler() {
    setSq([]);
  }
  return (
    <button className="button orange" onClick={clearHandler}>
      Clear All
    </button>
  );
}

export default ClearAllSq;
