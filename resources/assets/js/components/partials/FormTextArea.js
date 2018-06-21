import React, { Component } from 'react';

const FormTextArea = (props) => {
  return (
      <div className="form-group">
        <label htmlFor={props.forText}>{props.labelText}</label>
        <textarea
          className="form-control"
          rows={props.numRows}
          maxLength={props.length}
          value={props.value}
          onChange={props.change}
          required
        />
      </div>
  )
};

export default FormTextArea;