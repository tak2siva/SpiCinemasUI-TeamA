import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import filter from '../filter/listingFilter/reducer';

const rootReducer = combineReducers({
  movies,
  filter,
  routing: routerReducer
});

export default rootReducer;