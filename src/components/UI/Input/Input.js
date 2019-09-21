import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ onChange, label, id, wrapClasses, ...restProps }) {
  const [valid, setValid] = useState(false);

  const validate = (value) => {
    let validStatus = !!value;
    setValid(validStatus);
    return validStatus;
  }

  const changeHandler = (event) => {
    validate(event.target.value);
    onChange(event);
  }

  const allWrapClasses = 'input-wrapper form-group input-group mb-12' + wrapClasses;

  return (
    <div className={allWrapClasses}>
      <label htmlFor={id}>{label}</label>
      <div className="input-group-append">
        <input 
          id={ id } 
          type="text" 
          value=""
          onChange={ changeHandler } 
          className="form-control"
          placeholder="Enter domain name"
          { ...restProps }
        />
      </div>
      { !valid && <div>Please enter domain name.</div> }
    </div>
  )
}

Input.defaultProps = {
  onChange: (() => null),
  label: '',
  id: `input-${Math.random()}`,
  wrapClasses: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  wrapClasses: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
};

export default Input;

