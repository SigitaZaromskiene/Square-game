const whiteBackBtn = ({ setSq }) => {
  const whiteBackHandler = () => {
    setSq((sq) => [...sq, { color: "#fff" }]);
  };

  return (
    <button className="button red" onClick={whiteBackHandler}>
      White background
    </button>
  );
};

export default whiteBackBtn;
