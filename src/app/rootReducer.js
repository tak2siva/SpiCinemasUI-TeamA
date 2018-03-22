import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import filter from '../filter/listingFilter/reducer';
import location from '../filter/location/reducer';

const rootReducer = combineReducers({
  movies,
  filter,
  location,
  routing: routerReducer
});

export default rootReducer;