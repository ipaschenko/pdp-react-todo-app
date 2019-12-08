import React from 'react';

function AlertError(props) {
 return props.text ? (<div className="alert alert-danger">{props.text}</div>) : null;
}

export default AlertError;
