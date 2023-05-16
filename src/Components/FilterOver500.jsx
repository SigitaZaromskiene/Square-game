const FilterOver500 = ({ setSq }) => {
  const filterOver500Handler = () => {
    setSq((sq) =>
      sq.map((s) =>
        s.number > 500 ? { ...s, show: true } : { ...s, show: false }
      )
    );
  };
  return (
    <button className="button olive" onClick={filterOver500Handler}>
      Filter over 500
    </button>
  );
};

export default FilterOver500;
