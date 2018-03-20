import { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from '../filter/actions';

export const NOW_SHOWING = 'now-showing'
export const UPCOMING_RELEASE = 'upcoming-release'

const filter = (state={listingType: NOW_SHOWING}, action) => {
    switch(action.type) {
      case UPDATE_TO_NOW_SHOWING:
        return {...state, listingType: NOW_SHOWING}
      case UPDATE_TO_UPCOMING_RELEASE:
        return {...state, listingType: UPCOMING_RELEASE}
      default:
        return state;
    }
  };

  export default filter;