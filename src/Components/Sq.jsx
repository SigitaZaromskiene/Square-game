function Sq({ index, sq }) {
  return (
    <div className="sq" style={{ backgroundColor: sq.color }}>
      {index}
    </div>
  );
}

export default Sq;
