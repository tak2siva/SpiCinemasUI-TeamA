import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMovies, { FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS } from '../movies/actions';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Axios from 'axios';
import { NOW_SHOWING } from '../filter/reducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
var mock;
var store;
var apiData;
beforeEach(function() {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    store = mockStore({})
    mock = new MockAdapter(Axios.create())
    apiData = [{"id":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING"},
    {"id":2,"name":"Sultan","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING"}]
});
describe('app/movies/actions.js', ()=>{
  it('should fetch movies from server which are now-showing and return FETCH_MOVIES_SUCCESS', async () => {
    mock
        .onGet('http://localhost:9090/movies/now-showing')
        .reply(function() {
          return new Promise(function(resolve, reject) {
            resolve(200,apiData);
          });
        });
    let expectedActions = []
    store.dispatch(fetchMovies(NOW_SHOWING)).then(()=>{
        expectedActions = [...expectedActions,{type:FETCH_MOVIES_PROGRESS}];
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
        expectedActions = [...expectedActions,{type:FETCH_MOVIES_SUCCESS,
                                              payload:apiData }];
        expect(store.getActions()[1]).toEqual(expectedActions[1]);
        });
  });
  });