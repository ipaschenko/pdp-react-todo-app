import React from 'react';
import TaskForm from './list/TaskForm';
import history from '../utils/history';

function EditTask(props) {
  if (!props.location.state) {
    goToList();
  }

  const goToList = () => {
    history.push('/list');
  };

  const handleTaskEdit = (value) => {
    console.log(value);
  };

  return (
    <div className="container-fluid">

      <div className="row mb-3">
        <div className="col-12">
          <button type="button" className="btn btn-sm btn-outline-info"
                  onClick={goToList}>Back to List</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 mb-3">
          <TaskForm initValue={props.location.state} onFormSubmit={handleTaskEdit} />
        </div>
      </div>
    </div>
  );
}

export default EditTask;

