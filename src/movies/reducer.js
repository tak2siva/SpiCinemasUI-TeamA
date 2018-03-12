import { FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actions'

const reducer = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_MOVIES_PROGRESS: return {...state, fetching: true };
    case FETCH_MOVIES_SUCCESS: return {...state, fetching: false, items: action.payload };
    case FETCH_MOVIES_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default reducer;