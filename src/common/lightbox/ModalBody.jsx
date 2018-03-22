import React from "react";

const ModalBody = props => {
  return (
    <div className="modal-body">
      <select onChange={(e)=>props.onSelectLocation(e.currentTarget.value)}>
        <option key="-1" value="-1">Select location</option>
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
