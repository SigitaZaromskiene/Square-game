function ShowAll({ setSq }) {
  const showAllHandler = () => {
    setSq((s) => s.map((s) => ({ ...s, show: true })));
  };

  return (
    <button className="button blue" onClick={showAllHandler}>
      Show all
    </button>
  );
}

export default ShowAll;
