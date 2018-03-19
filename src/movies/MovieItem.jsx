import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ name, experiences, slug }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div class="col-md-2 img-div">
      <img alt={name} src={imageUrl} />
      <h5 class = "movie-text"><b>{name.toUpperCase()}</b></h5>
      <h3 class = "movie-text">{experiences.toUpperCase()}</h3>
    </div>
  )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
