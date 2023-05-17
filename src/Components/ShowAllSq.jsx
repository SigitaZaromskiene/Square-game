function ShowAllSq({ setSq }) {
  const showAllHandler = () => {
    setSq((s) => s.map((s) => ({ ...s, show: true })));
  };
  return <button className="button red" onClick={showAllHandler}></button>;
}

export default ShowAllSq;
