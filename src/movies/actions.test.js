import React from 'react';
import fetchMovies, { NOW_SHOWING, FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../movies/actions';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from '../filter/actions';
import {axiosInstance} from '../app/App.test'

let mock;
var store;
var apiData;
beforeEach(function() {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    store = mockStore({})
    mock = new MockAdapter(axiosInstance)
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
  it('should return FETCH_MOVIES_FAILURE if http 500', async () => {
    mock
        .onGet('http://localhost:9090/movies/now-showing')
        .reply(function() {
          return new Promise(function(resolve, reject) {
            resolve(500,{});
          });
        });
    let expectedActions = []
    store.dispatch(fetchMovies(UPDATE_TO_NOW_SHOWING)).then(()=>{
        expectedActions = [...expectedActions,{type:FETCH_MOVIES_PROGRESS}];
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
        expectedActions = [...expectedActions,{type:FETCH_MOVIES_FAILURE }];
        expect(store.getActions()[1]).toEqual(expectedActions[1]);
        });
  });
  });