import React, { Component } from 'react';

const StatusMessage = (props) => {
  return (
        <p className={props.classes}>{props.text}</p>
  )
};

export default StatusMessage;