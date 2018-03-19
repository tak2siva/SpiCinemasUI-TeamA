import { NOW_SHOWING, UPCOMING_RELEASE } from '../movies/actions';

const header = (state={listingType: NOW_SHOWING}, action) => {
    switch(action.type) {
      case NOW_SHOWING:
        return {...state, listingType: NOW_SHOWING}
      case UPCOMING_RELEASE:
        return {...state, listingType: UPCOMING_RELEASE}
      default:
        return state;
    }
  };

  export default header;