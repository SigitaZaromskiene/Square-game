function AddButton({ setSq }) {
  const addSqHandler = () => {
    setSq((sq) => [...sq, 1]);
  };

  return (
    <button className="button green" onClick={addSqHandler}>
      New
    </button>
  );
}

export default AddButton;
