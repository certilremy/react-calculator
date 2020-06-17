import React from 'react';
import PropTypes from 'prop-types';

const defineSyle = (wide, color) => {
  if (wide) {
    return {
      bgColor: color,
      flexBasis: '50%',
    };
  }
  return {
    bgColor: color,
    flexBasis: '25%',
  };
};

export default function Button({
  name, color, wide,
}) {
  const bStyle = defineSyle(wide, color);
  return <button type="button" style={bStyle}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};
