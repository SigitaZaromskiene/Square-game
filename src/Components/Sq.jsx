import CloneBtn from "./CloneBtn";
import DelBtn from "./DelBtn";
import SpinBtn from "./SpinBtn";

function Sq({ index, sq, setSq }) {
  return (
    <div
      className="sq"
      style={{ backgroundColor: sq.color, borderColor: sq.color }}
    >
      {index}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <DelBtn sq={sq} setSq={setSq} />
          <CloneBtn setSq={setSq} sq={sq} />
        </div>
        <div>
          <SpinBtn setSq={setSq} sq={sq} />
          <CloneBtn setSq={setSq} sq={sq} />
        </div>
      </div>
    </div>
  );
}

export default Sq;
