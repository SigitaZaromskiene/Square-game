const WhiteBackBtn = ({ setSq }) => {
  const whiteBackHandler = () => {
    setSq((sq) => [...sq, { color: "#fff" }]);
  };

  return (
    <button className="button red" onClick={whiteBackHandler}>
      White background
    </button>
  );
};

export default WhiteBackBtn;
