import React from "react";
import {connect} from 'react-redux';
import Title from './Title';
import ModalBody from './ModalBody';
import fetchLocations from '../../filter/location/action';

class Modal extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchLocations();
  }

  render(){
    return (
      <div className="box">
      <Title title={this.props.title} />
      <ModalBody locations={this.props.locations} />
    </div>
    );
  }
}

export default connect(
  state => ({
    locations: state.location.value
  }), 
  (dispatch) => ({
    fetchLocations: () => dispatch(fetchLocations())
  }))(Modal);
