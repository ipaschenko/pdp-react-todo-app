import React, { useEffect, useState, useCallback } from 'react';
import * as axios from 'axios/index';
import { useAuth0 } from '../../react-auth0-spa';
import { BACKEND_URL } from '../../config';
import AlertError from '../shared/AlertError';
import TaskForm from './TaskForm';
import ListItem from './ListItem';
import ListGroup from './ListGroup';

function ListContainer() {
  const {getTokenSilently} = useAuth0();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const getList = useCallback(async () => {
    const token = await getTokenSilently();
    const headers = {Authorization: `Bearer ${token}`};

    axios
      .get(`${BACKEND_URL}/list`, {headers})
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err.toString()));
  }, [getTokenSilently]);

  useEffect(() => {
    getList();
  }, [getList]);

  const handleTaskEdit = async (formValue) => {
    const token = await getTokenSilently();
    const headers = {Authorization: `Bearer ${token}`};

    axios
      .post(`${BACKEND_URL}/list`, formValue, {headers})
      .then(() => getList())
      .catch((err) => setError(err.toString()));
  };

  const deleteTask = async (id) => {
    const token = await getTokenSilently();
    const headers = {Authorization: `Bearer ${token}`};
    axios
      .delete(`${BACKEND_URL}/list/${id}`, {headers})
      .then(() => getList())
      .catch((err) => setError(err.toString()));
  };

  const doneTask = async (id) => {
    const token = await getTokenSilently();
    const headers = {Authorization: `Bearer ${token}`};
    axios
      .patch(`${BACKEND_URL}/list/${id}`, {done: true}, {headers})
      .then(() => getList())
      .catch((err) => setError(err.toString()));
  };

  const editTask = (task) => {

  };

  const createTaskItem = (task) => {
    return (<ListItem task={task}
                      key={task._id}
                      onDelete={deleteTask}
                      onEdit={editTask}
                      onDone={doneTask}/>);
  };

  return (<div className="container-fluid">
    <div className="row mt-3 mb-5">
      <div className="col-md-8 offset-md-2 mb-3">
        <TaskForm onFormSubmit={handleTaskEdit}/>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-12">
        <AlertError text={error}/>
        {loading}
      </div>
    </div>
    <ListGroup done={false}
               list={list.filter((item) => !item.done).map(item => createTaskItem(item))}/>
    <hr/>
    <ListGroup done={true}
               list={list.filter((item) => item.done).map(item => createTaskItem(item))}></ListGroup>

  </div>);
}

export default ListContainer;


