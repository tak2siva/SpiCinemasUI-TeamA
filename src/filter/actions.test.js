import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import changeListingFilterAndFetchData from './actions';
import {NOW_SHOWING, UPCOMING_RELEASE} from './reducer';

let store;
let apiData;
let mock;
beforeEach(function() {
	const middlewares = [thunk]
	const mockStore = configureMockStore(middlewares);
	store = mockStore({
		filter: {
			listingType: ''
		}
	});
});

describe('testing filter/action', () => {
	it('should test validate that listing type is equal to now_showing', () => {
		let expectedActions = [];
		store.dispatch(changeListingFilterAndFetchData(NOW_SHOWING));
		expect(store.getActions()[0]).toEqual({type: NOW_SHOWING});
	});
});

describe('testing filter/action', () => {
	it('should test validate that listing type is equal to upcoming_release', () => {
		let expectedActions = [];
		store.dispatch(changeListingFilterAndFetchData(UPCOMING_RELEASE));
		expect(store.getActions()[0]).toEqual({type: UPCOMING_RELEASE});
	});
});