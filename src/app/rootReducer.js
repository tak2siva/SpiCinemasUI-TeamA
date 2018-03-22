import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import location from '../filter/location/reducer';
import listingFilter from '../filter/listingFilter/reducer';
import languageFilter from '../filter/language/reducer';

const rootReducer = combineReducers({
  movies,
  listingFilter,
  languageFilter, 
  location,
  routing: routerReducer
});

export default rootReducer;