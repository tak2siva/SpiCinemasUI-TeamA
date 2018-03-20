import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import changeListingFilterAndFetchData from './actions';
import {NOW_SHOWING, UPCOMING_RELEASE} from './reducer';
import { FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS } from '../movies/actions';

let store;
let apiData;
let mock;
beforeEach(function() {
	const middlewares = [thunk]
	const mockStore = configureMockStore(middlewares);
	store = mockStore({
		filter: {
			listingType: NOW_SHOWING
		}
	});
	mock = new MockAdapter(Axios.create())
	apiData = [{"id":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING"},
		{"id":2,"name":"Sultan","experiences":"RDX, Dolby Atmos, SUB","listingType":"NOW_SHOWING"}]
		
		mock.onGet('http://localhost:9090/movies/now-showing')
			.reply(function() {
				return new Promise(function(resolve, reject) {
					resolve(200,apiData);
				});
			});
});

describe('testing filter/action', () => {
	it('should test for change listing type action dispatcher', () => {
		let expectedActions = [];
		store.dispatch(changeListingFilterAndFetchData(store.dispatch)).then(()=> {
			console.log(store.getActions());
		});
	});
});