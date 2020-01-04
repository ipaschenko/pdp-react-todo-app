import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PushMessage(props) {
  return (
    <div className={'alert alert-dismissible fade show ' + (props.type === 'error' ? 'alert-danger' : 'alert-info')}>
      {props.text}
      <button type="button" className="close" onClick={() => props.onClose(props.keyId)}>
        <FontAwesomeIcon icon="times"/>
      </button>
    </div>);
}

export default PushMessage;
