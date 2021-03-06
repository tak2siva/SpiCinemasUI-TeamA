import { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from './actions';

export const NOW_SHOWING = 'NOW_SHOWING'
export const UPCOMING_RELEASE = 'UPCOMING_RELEASE'

const listingFilter = (state={listingType: NOW_SHOWING, languages: []}, action) => {
  switch(action.type) {
    case UPDATE_TO_NOW_SHOWING:
      return {...state, listingType: NOW_SHOWING}
    case UPDATE_TO_UPCOMING_RELEASE:
      return {...state, listingType: UPCOMING_RELEASE}
    default:
      return state;
  }
};

export default listingFilter;