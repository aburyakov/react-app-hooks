import React from 'react';

const Button = props => {
  const classes = 'btn ' + props.classes;
  return (
    <button type="button" className={classes} onClick={props.clickHandler}>{props.children}</button>
  )
}

export default Button;

