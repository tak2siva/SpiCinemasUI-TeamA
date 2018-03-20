import NOW_SHOWING from '../movies/actions';
import header from '../header/headerReducer';

const initialState = {listingType: NOW_SHOWING}
describe('app/header/headerReducer', () => {
  it('should have initial state', () => {
    expect(header(initialState,{type:NOW_SHOWING})).toEqual(initialState);
  });
});