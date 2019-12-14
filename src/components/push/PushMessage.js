import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PushMessage(props) {
  const close = () =>  props.onClose(props.keyId);
  setTimeout(() => close(), 5000);

  return (
    <div className={'alert alert-dismissible fade show ' + (props.type === 'error' ? 'alert-danger' : 'alert-info')}>
      {props.text}
      <button type="button" className="close" onClick={close}>
        <FontAwesomeIcon icon="times"/>
      </button>
    </div>);
}

export default PushMessage;
