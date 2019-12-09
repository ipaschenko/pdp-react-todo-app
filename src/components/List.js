import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import AlertError from './shared/AlertError';
import { useAuth0 } from '../react-auth0-spa';
import TaskForm from './TaskForm';
import ListItem from './list/ListItem';

function List() {
  const {user, getTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState('This is test errorrrrrr text!');

  useEffect(async () => {
    const token = await getTokenSilently();
    console.log('token: ', token);
    axios.get('http://localhost:5000/list', {headers: {
        Authorization: `Bearer ${token}`
      }})
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error: ', err.toString());
        setError(err.toString());
      });
  }, []);

  return (<div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12">
            <TaskForm />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AlertError text={error} />
            {loading}
          </div>
        </div>
    {list.map((item) => <ListItem task={item} />)}
      </div>);
}

export default List;


