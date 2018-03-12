import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';

const rootReducer = combineReducers({
  movies,
  routing: routerReducer,
});

export default rootReducer;