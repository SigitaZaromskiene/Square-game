function SortBtn({ setSq }) {
  const sortHandler = () => {
    setSq((s) => [...s].sort((a, b) => a.number - b.number));
  };

  return (
    <button className="button olive" onClick={sortHandler}>
      Sort
    </button>
  );
}

export default SortBtn;
