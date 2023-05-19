import CloneBtn from "./CloneBtn";
import DelBtn from "./DelBtn";
import SpinBtn from "./SpinBtn";
import StopSpinBtn from "./StopSpinBtn";

function Sq({ sq, setSq }) {
  return (
    <div
      className={"sq " + (sq.spin ? "spin" : "")}
      style={{ backgroundColor: sq.color, borderColor: sq.color }}
    >
      {sq.number}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <DelBtn sq={sq} setSq={setSq} />
          <CloneBtn setSq={setSq} sq={sq} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <SpinBtn setSq={setSq} sq={sq} />
          <StopSpinBtn setSq={setSq} sq={sq} />
        </div>
      </div>
    </div>
  );
}

export default Sq;
