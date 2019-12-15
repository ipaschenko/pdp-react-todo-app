import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskForm from './list/TaskForm';
import history from '../utils/history';
import { useAuth0 } from '../react-auth0-spa';
import { updateTask } from '../utils/HttpService';
import Spinner from './shared/Spinner';

function EditTask(props) {
  const [loading, setLoading] = useState(false);

  const oldTaskValues = {};
  const {getTokenSilently} = useAuth0();
  const goToList = () => {
    history.push('/list');
  };

  if (!props.location.state) {
    goToList();
  } else {
    oldTaskValues.title = props.location.state.title;
    oldTaskValues.text = props.location.state.text;
    oldTaskValues.important = props.location.state.important;
  }

  const handleFormSubmit = async(value) => {
    setLoading(true);
    const token = await getTokenSilently();
    updateTask(token, props.location.state._id, value)
      .then(() => goToList())
      .catch((e) => console.log(e));
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3 mb-3">
        <div className="col-12">
          <button type="button" className="btn btn-sm btn-outline-info"
                  onClick={goToList}>
            <FontAwesomeIcon icon="arrow-left" className="mr-1" />
            Back to List</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 mb-3">
          <TaskForm mode="edit"
                    initValue={oldTaskValues} onFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <Spinner loading={loading}></Spinner>
    </div>
  );
}

export default EditTask;

