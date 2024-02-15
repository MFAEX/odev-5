import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, children }) => {
  const className = `button button-${type}`;

  return <button className={className}>{children}</button>;
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'text', 'default', 'dashed', 'link']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;