import React from 'react';
import PropTypes from 'prop-types';

const FooText = (props) => {
  return (
    <p>
      {props.fixedText} {props.dynamicText}
    </p>
  );
};

FooText.propTypes = {
  fixedText: PropTypes.string.isRequired,
  dynamicText: PropTypes.string.isRequired
};

export default FooText;
