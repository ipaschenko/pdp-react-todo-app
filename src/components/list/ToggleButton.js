import React from 'react';

function ToggleButton(props) {
  return (
    <button type="button"
            className={'btn btn-outline-info text-capitalize ' + (props.active ? 'active' : '')}
            onClick={() => props.onShowChange(props.name)}>
      {props.name}
      <span className="badge badge-light ml-1">{props.count}</span>
    </button>
  );
};

export default ToggleButton;
