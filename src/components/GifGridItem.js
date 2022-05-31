import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( props ) => {

  return (
      <div className="card animate__animated animate__fadeIn">
        <img src={ props.url } alt={ props.title } />
        <p>{props.title}</p>
      </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

