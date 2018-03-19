import React from 'react';
import { connect } from 'react-redux';
import fetchMovies, { NOW_SHOWING, UPCOMING_RELEASE } from '../movies/actions';

const Header = (props) => {
  return (
    <div class="header">
      <div class="App-logo">
        <img src="spicinemas.png" alt="Unable to load..."></img>
      </div>
      <div class="App-header-text"><h1>Just Cinemas</h1></div>
      <div class="btn-group movie-group">
        <button type="button" className={props.listingType === NOW_SHOWING ? 'btn active' : 'btn'} 
          onClick={()=>props.changeListingType(NOW_SHOWING)}>NOW RUNNING</button>
        <button type="button" className={props.listingType === UPCOMING_RELEASE ? 'btn active' : 'btn'} 
          onClick={()=>props.changeListingType(UPCOMING_RELEASE)}>COMING SOON</button>
      </div>
    </div >
  )
};

const tabsDispatch = function mapDispatchToProps(dispatch) {
  return {
    changeListingType: (listingType) => {
      dispatch({
        type: listingType
      })
      fetchMovies(listingType)(dispatch)
    }
  }
}

Header.defaultProps = {};

export default connect((state)=>({
  listingType: state.header.listingType
}), tabsDispatch )(Header);
 