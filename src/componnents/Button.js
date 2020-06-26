import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, onClick,
}) => {
  const styles = {
    backgroundColor: color,
  };

  const clickHandler = e => {
    onClick(e.target.innerText);
  };

  return (
    <button type="button" className={`${wide ? 'wide' : ''}`} onClick={clickHandler} style={styles}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: '#e0e0e0',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
