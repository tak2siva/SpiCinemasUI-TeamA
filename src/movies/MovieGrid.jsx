import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';

class MovieGrid extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchMovies(this.props.listingType)
  }

  render() {
    if(this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <div>
        {this.props.movies.items.map(({ name, experiences, slug }) => (
          <MovieItem key={name} name={name} slug={slug} experiences={experiences} />
        ))}
      </div>
    );
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  },
};

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array,
  }),
};

export default connect(
  (state) => ({
    movies: state.movies,
    listingType: state.header.listingType
  }), 
  (dispatch) => ({
    fetchMovies: (listingType) => dispatch(fetchMovies(listingType))
  }))(MovieGrid);
