import React from 'react';
import PropTypes from 'prop-types';

const FooText = ({ fixedText, dynamicText }) => {
  return (
    <p>
      {fixedText} {dynamicText}
    </p>
  );
};

FooText.propTypes = {
  fixedText: PropTypes.string.isRequired,
  dynamicText: PropTypes.string.isRequired
};

export default FooText;
