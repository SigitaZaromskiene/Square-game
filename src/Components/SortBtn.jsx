function SortBtn({ setSq }) {
  const sortHandler = () => {
    setSq((s) => [...s].sort((a, b) => b - a));
  };

  return (
    <button className="button olive" onClick={sortHandler}>
      Sort
    </button>
  );
}

export default SortBtn;
