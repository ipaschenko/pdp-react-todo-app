import React from 'react';

function TaskListBar() {
  return (
    <div className="row mb-3">
      <div className="col-12">
        <div className="btn-group btn-group-toggle">
          <button type="button" className="btn btn-sm btn-outline-info active">
            Active
            <span className="badge badge-light">4</span>
          </button>
          <button type="button" className="btn btn-sm btn-outline-info">
            Done
            <span className="badge badge-light">4</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskListBar;
