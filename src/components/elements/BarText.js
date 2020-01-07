import React from 'react';
import PropTypes from 'prop-types';

const BarText = (props) => {
  return (
    <p>
      {props.fixedText} {props.dynamicText}
    </p>
  );
};

BarText.propTypes = {
  fixedText: PropTypes.string.isRequired,
  dynamicText: PropTypes.string.isRequired
};

export default BarText;
