import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import goal from "/goal.jpg";
import joingroup from "/joingroup.jpg";
import pay from "/pay2.jpg";
import rewards from "/rewards.jpg";

const boxStyle = {
  display: "flex",
  flexDirection: "column", // Set to column
  alignItems: "center",
  border: "grey solid 2px",
  borderRadius: "50%",
  padding: "5px",
  width: "175px",
  height: "175px",
  color: "#fff",
  marginRight: "80px",
  textAlign: "center", // Center text
  backgroundColor: "#714FFF", // Background color
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Box shadow
  //   font:"8px"
};

import "./arrow.css";
const DraggableBox = ({ id, desc, url }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div className="steps-circle" id={id} style={boxStyle}>
        <div className="steps-circle-logo">
          <img src={url} />
        </div>
        <span className="steps-desc">
          <h4>{id}</h4>
          <h5>{desc}</h5>
        </span>
      </div>
    </Draggable>
  );
};

export default function Arrow() {
  const steps = [
    { id: "Step 1:", desc: "Set Goal", url: goal },
    { id: "Step 2:", desc: "Create or Join Group", url: joingroup },
    { id: "Step 3:", desc: "Pay Amount on Time", url: pay },
    { id: "Step 4:", desc: "Earn Rewards", url: rewards },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Xwrapper>
        {steps.map((step, index) => (
          <DraggableBox
            key={step.id}
            id={step.id}
            desc={step.desc}
            url={step.url}
            style={{
              marginRight: index !== steps.length - 1 ? "80px" : "0",
            }}
          />
        ))}
        <Xarrow start={"Step 1:"} end="Step 2:" dashness />
        <Xarrow start={"Step 2:"} end="Step 3:" dashness />
        <Xarrow start={"Step 3:"} end="Step 4:" dashness />
      </Xwrapper>
    </div>
  );
}
