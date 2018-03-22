import React from "react";

const ModalBody = props => {
  return (
    <div className="modal-body">
      <select>
        {props.locations.map(location => (
          <option key={location.code} value={location.code}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModalBody;
