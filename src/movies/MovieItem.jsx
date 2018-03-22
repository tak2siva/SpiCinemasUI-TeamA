import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ name, experiences, slug }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div className="col-md-2">
      <img alt={name} src={imageUrl} />
      <h5 className = "movie-text"><b>{name.toUpperCase()}</b></h5>
      <h3 className = "movie-text">{experiences.toUpperCase()}</h3>
    </div>
  )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
