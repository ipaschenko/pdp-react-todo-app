import React, { useEffect, useState, useCallback } from 'react';
import history from '../../utils/history';
import { fetchTasks, createTask, deleteTask, updateTask } from '../../utils/HttpService';
import { useAuth0 } from '../../react-auth0-spa';
// import PushMessage from '../push/PushMessage';
import TaskForm from './TaskForm';
import ListItem from './ListItem';
import ListGroup from './ListGroup';
import TaskListBar from './TaskListBar';
import PushContainer from '../push/PushContainer';

function ListContainer() {
  const {getTokenSilently} = useAuth0();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  const getList = useCallback(async () => {
    const token = await getTokenSilently();
    fetchTasks(token)
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => setMessage({message: err.toString(), type: 'error', key: new Date().getTime()}));
  }, [getTokenSilently]);

  useEffect(() => {
    getList();
  }, [getList]);

  const handleTaskEdit = async (formValue) => {
    const token = await getTokenSilently();
    createTask(token, formValue)
      .then((res) => {
        setMessage({message: res.data, type: 'info', key: new Date().getTime()});
        getList();
      })
  .catch((err) => setMessage({message: err.toString(), type: 'error', key: new Date().getTime()}));
  };

  const deleteItem = async (id) => {
    const token = await getTokenSilently();
    deleteTask(token, id)
      .then((res) => {
        setMessage({message: res.data, type: 'info', key: new Date().getTime()});
        getList();
      })
      .catch((err) => setMessage({message: err.toString(), type: 'error', key: new Date().getTime()}));
  };

  const doneItem = async (id) => {
    const token = await getTokenSilently();
    updateTask(token, id, {done: true})
      .then((res) => {
        setMessage({message: res.data, type: 'info', key: new Date().getTime()});
        getList();
      })
      .catch((err) => setMessage({message: err.toString(), type: 'error', key: new Date().getTime()}));
  };

  const editItem = (task) => {
    history.push('/task-edit', task);
  };

  const createTaskItem = (task) => {
    return (<ListItem task={task}
                      key={task._id}
                      onDelete={deleteItem}
                      onEdit={editItem}
                      onDone={doneItem}/>);
  };

  return (<div className="container-fluid">

    <div className="row mt-3 mb-5">
      <div className="col-md-8 offset-md-2 mb-3">
        <TaskForm onFormSubmit={handleTaskEdit}/>
      </div>
    </div>
    <hr/>
    <TaskListBar />
    <hr/>
    <div className="row">
      <div className="col-12">
        {/*{loading}*/}
      </div>
    </div>
    <ListGroup done={false}
               list={list.filter((item) => !item.done).map(item => createTaskItem(item))}/>
    <hr/>
    <ListGroup done={true}
               list={list.filter((item) => item.done).map(item => createTaskItem(item))}></ListGroup>
    <PushContainer message={message} />
  </div>);
}

export default ListContainer;


