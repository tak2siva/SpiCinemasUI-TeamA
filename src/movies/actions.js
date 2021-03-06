import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import * as url from '../common/constant/url'

export const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_MOVIES_SUCCESS, 
  payload: data
});

const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE
};

const fetchMovies = (listingType,locationCode) => {
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress);
    try {
      const movies = await axios.get(url.FETCH_MOVIES_URL, {
        params : {
          location: locationCode,
          listingType: listingType
        }
      });

      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
        return {...movie, slug: sluggedData}
      });  
      dispatch(movieDataFetched(moviesData))
    } catch(error) {
      dispatch(movieDataFetchFailure)
    }
  }
};

export default fetchMovies;
