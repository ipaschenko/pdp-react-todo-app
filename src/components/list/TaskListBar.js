import React from 'react';
import ToggleButton from './ToggleButton';

function TaskListBar(props) {
  return (
    <div className="alert alert-dark d-flex justify-content-start align-content-start">
      <div className="mr-3">
        <div className="btn-group btn-group-toggle">
          <ToggleButton name="active"
                        active={props.showOptions.active}
                        count={props.activeCount}
                        onShowChange={props.onShowChange} />
          <ToggleButton name="done"
                        active={props.showOptions.done}
                        count={props.doneCount}
                        onShowChange={props.onShowChange} />
        </div>
      </div>

      {props.search}
    </div>
  );
}

export default TaskListBar;
