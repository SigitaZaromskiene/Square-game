function DefaultSort({ setSq }) {
  const defaultSortHandler = () => {
    setSq((s) => [...s].sort((a, b) => a.row - b.row));
  };
  return (
    <button className="button green" onClick={defaultSortHandler}>
      Default Sort
    </button>
  );
}

export default DefaultSort;
