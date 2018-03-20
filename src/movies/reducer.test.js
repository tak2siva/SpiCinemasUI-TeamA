import { FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actions'
import reducer from './reducer'

const initialState = { fetching: false, items: []}

describe('testing movies/reducer', () => {
  it('should validate initial state on passing FETCH_MOVIES_PROGRESS', () => {
    expect(reducer(initialState,{type:FETCH_MOVIES_PROGRESS})).toEqual({fetching:true,items: []});
  });

  const successState = {fetching: false, items:undefined}
  it('should return undefined data on passing FETCH_MOVIES_SUCCESS', () => {
    expect(reducer(initialState,{type:FETCH_MOVIES_SUCCESS})).toEqual(successState);
  });

  const errorState = {fetching: false, error:true,items:[]}
  it('should return error=true  on passing FETCH_MOVIES_FAILURE', () => {
    expect(reducer(initialState,{type:FETCH_MOVIES_FAILURE})).toEqual(errorState);
  });

});