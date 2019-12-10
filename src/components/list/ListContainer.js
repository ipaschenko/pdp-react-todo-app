import React, { useEffect, useState, useCallback } from 'react';
import * as axios from 'axios/index';
import AlertError from '../shared/AlertError';
import { useAuth0 } from '../../react-auth0-spa';
import { BACKEND_URL } from '../../config';
import TaskForm from './TaskForm';
import ListGroup from './ListGroup';

function ListContainer() {
  const {getTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState('This is test errorrrrrr text!');

  const getList = useCallback(async () => {
    const token = await getTokenSilently();
    console.log(token);
    const headers = {Authorization: `Bearer ${token}`};

    axios
      .get(`${BACKEND_URL}/list`, {headers})
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error: ', err.toString());
        setError(err.toString());
      });
  }, [getTokenSilently]);

  useEffect(() => {
    getList();
  }, [getList]);

  const handleTaskEdit = async (formValue) => {
    const token = await getTokenSilently();
    console.log(token);
    const headers = {Authorization: `Bearer ${token}`};

    axios
      .post(`${BACKEND_URL}/list`, formValue, {headers})
      .then(() => {
        getList();
      });
  };

  const deleteTask = async (id) => {
    console.log('deleteTask ', id);
    const token = await getTokenSilently();
    const headers = {Authorization: `Bearer ${token}`};
    axios
      .delete(`${BACKEND_URL}/list/${id}`, {headers})
      .then(() => {
        getList();
      });
  };

  return (<div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12">
            <TaskForm onFormSubmit={handleTaskEdit}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AlertError text={error} />
            {loading}
          </div>
        </div>
          <ListGroup list={list.filter((item) => !item.done)} onDelete={deleteTask} />
          <ListGroup list={list.filter((item) => item.done)} onDelete={deleteTask} />
      </div>);
}

export default ListContainer;


