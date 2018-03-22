import React from "react";
import Modal from "./Modal";
import {connect} from "react-redux";

const LightBox = (props) => {
  return (
    <div className = {!props.locationCode ? "" : "close"}>
      <div className="location-selection-box">
        <Modal title='LOCATION SELECTION'/>
      </div>
      <div className="mask" />
    </div>
  );
};


export default connect(
  state => ({
    locationCode : state.location.selectedLocation
  })
)(LightBox);
