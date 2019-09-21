import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, ...restProps}) {
  return (
    <button type="button" className="btn" {...restProps}>{children}</button>
  )
}

Button.defaultProps = {
  onClick: (() => null)
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

