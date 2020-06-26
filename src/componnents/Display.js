import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, onChange }) => {
  const handleChange = e => {
    if (e.target.value === '') {
      onChange('0');
    } else {
      onChange(e.target.value);
    }
  };

  return (

    <div className=" display">
      <div onChange={handleChange}>{result}</div>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Display;
