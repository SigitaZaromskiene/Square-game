import CloneBtn from "./CloneBtn";
import DelBtn from "./DelBtn";
import SpinBtn from "./SpinBtn";
import StopSpinBtn from "./StopSpinBtn";

function Sq({ sq, setSq, i }) {
  return (
    <div
      className={"sq " + (sq.spin ? "spin" : "")}
      style={{ backgroundColor: sq.color, borderColor: sq.color }}
    >
      {sq.number}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <DelBtn sq={sq} setSq={setSq} />
          <CloneBtn setSq={setSq} sq={sq} />
        </div>
        <div>
          <SpinBtn setSq={setSq} sq={sq} />
          <StopSpinBtn setSq={setSq} sq={sq} />
        </div>
      </div>
    </div>
  );
}

export default Sq;
