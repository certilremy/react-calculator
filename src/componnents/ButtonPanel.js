import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const labels = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const buttons = labels.map((group, prosition) => {
    const groupBtn = group.map(label => (
      <Button
        name={label}
        key={label}
        wide={label === '0'}
        onClick={clickHandler}
      />
    ));

    return (
      <div className={`group-${prosition + 1}`} key={`group-${prosition + 1}`}>
        {groupBtn}
      </div>
    );
  });

  return <div className="buttonPanel d-flex">{buttons}</div>;
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
