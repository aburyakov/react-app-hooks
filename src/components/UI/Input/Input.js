import React, { Component } from 'react';

class Input extends Component {
  state = {
    valid: false
  }

  constructor(props) {
    super(props);
    this.onChange = this.props.onChange || (() => null);
    this.type = props.type || 'text';
    this.label = props.label || '';
    this.placeholder = props.placeholder || 'Enter domain name';
    this.id = props.id || `${this.type}-${Math.random()}`;
    this.wrapClasses = 'input-wrapper form-group input-group mb-12' + (props.wrapClasses);
    this.inputClasses = 'form-control ' + (props.inputClasses);
  }

  validate(value) {
    let valid = !!value;
    this.setState((state, props) => ({
      valid
    }));
    return valid;
  }

  changeHandler = (event) => {
    this.validate(event.target.value);
    this.onChange(event);
  }

  render () {
    return (
      <div className={this.wrapClasses}>
        <label htmlFor={this.id}>{this.label}</label>
        <div className="input-group-append">
          <input 
            id={this.id} 
            type={this.type} 
            value={this.props.value} 
            onChange={ this.changeHandler } 
            className={this.inputClasses}  
            placeholder={this.placeholder}
          />
        </div>
        {
          this.state.valid
            && <div className="invalid-feedback">Please enter domain name.</div>
        }
      </div>
    )
  }
}

export default Input;

