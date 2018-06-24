import React, { Component } from 'react';

const Input = (props) => {
  return (
      <div className="form-group">
        <label htmlFor={props.forText}>{props.labelText}</label>
        <input
          className={props.classes}
          type={props.type}
          value={props.value}
          onChange={props.change}
          required={props.required}
        />
      </div>
  )
};

export default Input;