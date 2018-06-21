import React, { Component } from 'react';

const StatusMessage = (props) => {
  return (
        <p className={'alert alert-' + props.type}>{props.status == false ? '' : props.text}</p>
  )
};

export default StatusMessage;