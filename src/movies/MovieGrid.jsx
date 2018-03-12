import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';

class MovieGrid extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchMovies()
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
        {this.props.movies.items.map(({ name, slug }) => (
          <MovieItem key={name} name={name} slug={slug} />
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
    movies: state.movies
  }), 
  (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies())
  }))(MovieGrid);
