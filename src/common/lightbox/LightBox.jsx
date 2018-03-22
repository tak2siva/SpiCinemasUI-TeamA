import React from "react";
import Modal from "./Modal";

const LightBox = (props) => {
  return (
    <div>
      <div className="location-selection-box">
        <Modal title='LOCATION SELECTION'/>
      </div>
      <div className="mask" />
    </div>
  );
};

export default LightBox;
