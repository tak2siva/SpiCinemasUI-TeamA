import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ name, slug }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div>
      <img alt={name} src={imageUrl} />
      <h5>{name}</h5>
    </div>
  )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
