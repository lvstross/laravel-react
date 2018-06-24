import React, { Component } from 'react';

const FormSelect = (props) => {
  /**
   * Constructor
   * Props: 
   *    selectList | array
   *    labelClasses | string
   *    optionClasses | string
   *    selectClasses | string
   *    forText | string
   *    labelText | string
   */
  constructor(props) {
    super(props);
    const selectList = props.selectList.map((listItem) =>
      <option className={props.optionClasses}>{listItem}</option>
    );
  }

  // template
  return (
      <div className="form-group">
        <label className={props.labelClasses} htmlFor={props.forText}>{props.labelText}</label>
        <select className={props.selectClasses}>{selectList}</select>
      </div>
  )
};

export default FormSelect;