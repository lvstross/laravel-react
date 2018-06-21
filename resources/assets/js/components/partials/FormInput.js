import React, { Component } from 'react';

const input = (props) => {
  return (
      <div className="form-group">
        <label htmlFor={props.forText}>{props.labelText}</label>
        <input
          className="form-control full-width"
          type="text"
          maxLength={props.length}
          value={props.value}
          onChange={props.change}
          required
        />
      </div>
  )
};

export default input;