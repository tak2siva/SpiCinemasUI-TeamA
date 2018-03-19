import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import header from './headerReducer';

const rootReducer = combineReducers({
  movies,
  header,
  routing: routerReducer
});

export default rootReducer;