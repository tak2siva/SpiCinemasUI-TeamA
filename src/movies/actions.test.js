
import fetchMovies, { NOW_SHOWING, FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../movies/actions';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import { UPDATE_TO_NOW_SHOWING, UPDATE_TO_UPCOMING_RELEASE } from '../filter/listingFilter/actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios);
let store;
const apiData = [{"id":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING","slug": "kabali"},
    {"id":2,"name":"Sultan","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING","slug":"sultan"}]
beforeEach(()=> {
   store = mockStore({})
   
});

  it('should fetch movies from server which are now-showing and return FETCH_MOVIES_SUCCESS', async () => {
    mock
        .onGet('http://localhost:9090/movies/now-showing')
        .reply(200,apiData);
         
    let expectedActions = []
    store.dispatch(fetchMovies('now-showing')).then(()=>{
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
        .reply(500,{});
    let expectedActions = []
    store.dispatch(fetchMovies('now-showing')).then(()=>{
        expectedActions = [...expectedActions,{type:FETCH_MOVIES_PROGRESS}];
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
        expectedActions = [...expectedActions,{type:FETCH_MOVIES_FAILURE }];
        //expect(store.getActions()[1]).toEqual(expectedActions[1]);
        });
  });