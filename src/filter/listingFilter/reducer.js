import { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from './actions';

export const NOW_SHOWING = 'now-showing'
export const UPCOMING_RELEASE = 'upcoming-release'

const languages = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

const listingFilter = (state={listingType: NOW_SHOWING, languages: languages}, action) => {
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