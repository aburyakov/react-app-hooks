import React, { useState } from 'react';

function Input(props) {
  const [valid, setValid] = useState(false);
  const onChange = props.onChange || (() => null);

  const validate = (value) => {
    let validStatus = !!value;
    setValid(validStatus);
    return validStatus;
  }

  const changeHandler = (event) => {
    validate(event.target.value);
    onChange(event);
  }

  
  const type = props.type || 'text';
  const label = props.label || '';
  const placeholder = props.placeholder || 'Enter domain name';
  const id = props.id || `${type}-${Math.random()}`;
  const wrapClasses = 'input-wrapper form-group input-group mb-12' + (props.wrapClasses);
  const inputClasses = 'form-control ' + (props.inputClasses);

  return (
    <div className={wrapClasses}>
      <label htmlFor={id}>{label}</label>
      <div className="input-group-append">
        <input 
          id={id} 
          type={type} 
          value={props.value} 
          onChange={ changeHandler } 
          className={inputClasses}  
          placeholder={placeholder}
        />
      </div>
      {
        !valid && <div>Please enter domain name.</div>
      }
    </div>
  )
}

export default Input;

