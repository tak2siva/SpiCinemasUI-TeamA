import filter from './reducer';
import { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from './actions';

const initialStateNowShowing = {listingType: 'now-showing'}
const initialStateUpcomingRelease = {listingType: 'upcoming-release'}

describe('testing filter/reducer', () => {
  it('should validate now-showing as initial state', () => {
    expect(filter(initialStateNowShowing,{type:UPDATE_TO_NOW_SHOWING})).toEqual(initialStateNowShowing);
  });

  it('should validate upcoming-release as initial state', () => {
    expect(filter(initialStateUpcomingRelease,{type:UPDATE_TO_UPCOMING_RELEASE})).toEqual(initialStateUpcomingRelease);
  });

  it('should validate default state of now showing as initial state', () => {
    expect(filter(initialStateNowShowing,{type:UPDATE_TO_NOW_SHOWING})).toEqual(initialStateNowShowing);
  });
});