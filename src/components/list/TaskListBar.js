import React from 'react';

function TaskListBar(props) {
  return (
    <div>
      <div className="btn-group btn-group-toggle">
        <button type="button" className={'btn btn-sm btn-outline-info ' + (props.activeShow ? 'active' : '')}
                onClick={() => props.onShowChange('active')}>
          Active
          <span className="badge badge-light ml-1">{props.activeCount}</span>
        </button>
        <button type="button" className={'btn btn-sm btn-outline-info ' +  (props.doneShow ? 'active' : '')}
                onClick={() => props.onShowChange('done')}>
          Done
          <span className="badge badge-light ml-1">{props.doneCount}</span>
        </button>
      </div>
    </div>
  );
}

export default TaskListBar;
