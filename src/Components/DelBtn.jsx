function DelBtn({ setSq, sq }) {
  const deleteBtnHandler = () => {
    setSq((s) => s.filter((s) => s.id !== sq.id));
  };
  return (
    <button className="btn-small" onClick={deleteBtnHandler}>
      Delete
    </button>
  );
}

export default DelBtn;
