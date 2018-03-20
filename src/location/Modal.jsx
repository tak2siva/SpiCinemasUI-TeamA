import React from "react";

const Modal = props => {
  return (
    <div className="box">
      <Title title={props.title} />
      <ModalBody/>
    </div>
  );
};

const Title = props => {
  return (
    <div style={{ backgroundColor: "red", padding: "5px", color: "white" }}>
      LOCATION SELECTION
    </div>
  );
};

const ModalBody = props => {
  return (
    <div className='modal-body'>
        <select>
            <option>CHENNAI</option>
            <option>BANGALORE</option>
            <option>PATNA</option>
        </select>
    </div>
  );
};

export default Modal;
