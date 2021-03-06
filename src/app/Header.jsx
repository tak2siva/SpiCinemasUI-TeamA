import React from 'react';
import { connect } from 'react-redux';
import {NOW_SHOWING, UPCOMING_RELEASE} from '../filter/listingFilter/reducer';
import changeListingFilterAndFetchData, { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from '../filter/listingFilter/actions';
import LanguageSelect from './LanguageSelect';

const Header = (props) => {
  return (
    <div className="header">
      <div className="App-logo">
        <img src="spicinemas.png" alt="Unable to load..."></img>
      </div>
      <div className="App-header-text">
        <h1>Just Cinemas</h1>
        <LanguageSelect />
      </div>
      <div className="btn-group movie-group">
        <button type="button" className={props.listingType === NOW_SHOWING ? 'btn active' : 'btn'} 
          onClick={()=>props.changeListingType(UPDATE_TO_NOW_SHOWING)}>NOW RUNNING</button>
        <button type="button" className={props.listingType === UPCOMING_RELEASE ? 'btn active' : 'btn'} 
          onClick={()=>props.changeListingType(UPDATE_TO_UPCOMING_RELEASE)}>COMING SOON</button>
      </div>
    </div >
  )
};

Header.defaultProps = {};

export default connect((state)=>({
  listingType: state.listingFilter.listingType
}), (dispatch) => ({
  changeListingType: (filterAction) => dispatch(changeListingFilterAndFetchData(filterAction))
}) )(Header);
 