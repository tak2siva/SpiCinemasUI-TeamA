import React from "react";
import Modal from "./Modal";

const ModalWindow = props => {
  return (
    <div>
      <div className="location-selection-box">
        <Modal />
      </div>
      <div className="mask" />
    </div>
  );
};

export default ModalWindow;
