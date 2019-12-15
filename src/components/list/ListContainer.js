import React, { useEffect, useState, useCallback } from 'react';
import history from '../../utils/history';
import { fetchTasks, createTask, deleteTask, updateTask } from '../../utils/HttpService';
import { useAuth0 } from '../../react-auth0-spa';
import TaskForm from './TaskForm';
import ListItem from './ListItem';
import ListGroup from './ListGroup';
import TaskListBar from './TaskListBar';
import PushContainer from '../push/PushContainer';
import Spinner from '../shared/Spinner';

function ListContainer() {
  const {getTokenSilently} = useAuth0();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState({active: [], done: []});
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState({active: true, done:true});

  const showMessage = (text, type) => {
    const key = new Date().getTime();
    setMessage({text, type, key});
  };

  const getList = useCallback(async () => {
    setLoading(true);
    const token = await getTokenSilently();
    fetchTasks(token)
      .then((res) => {
        setList({
          active: res.data.filter((item) => !item.done),
          done: res.data.filter((item) => item.done),
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        showMessage(err.toString(), 'error');
      });
  }, [getTokenSilently]);

  const handleTaskEdit = async (formValue) => {
    const token = await getTokenSilently();
    createTask(token, formValue)
      .then((res) => {
        showMessage(res.data, 'info');
        getList();
      })
      .catch((err) => showMessage(err.toString(), 'error'));
  };

  const deleteItem = async (id) => {
    const token = await getTokenSilently();
    deleteTask(token, id)
      .then((res) => {
        showMessage(res.data, 'info');
        getList();
      })
      .catch((err) => showMessage(err.toString(), 'error'));
  };

  const doneItem = async (id) => {
    const token = await getTokenSilently();
    updateTask(token, id, {done: true})
      .then((res) => {
        showMessage(res.data, 'info');
        getList();
      })
      .catch((err) => showMessage(err.toString(), 'error'));
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
    const showChangeHandler = (type) => {
      setShowOptions({...showOptions, [type]: !showOptions[type]});
    };

  useEffect(() => {
    getList();
  }, [getList]);

  return (<div className="container-fluid">
    <div className="row mt-3 mb-5">
      <div className="col-md-8 offset-md-2 mb-3">
        <TaskForm mode="create" onFormSubmit={handleTaskEdit}/>
      </div>
    </div>
    <hr/>
    <div className="alert alert-dark">
      <TaskListBar activeCount={list.active.length}
                   activeShow={showOptions.active}
                   doneShow={showOptions.done}
                   doneCount={list.done.length}
                   onShowChange={showChangeHandler} />
    </div>

    <hr/>
    <ListGroup type="active"
               list={list.active.map(item => createTaskItem(item))}
               show={showOptions.active} />
    <hr/>
    <ListGroup type="done"
               list={list.done.map(item => createTaskItem(item))}
               show={showOptions.done}/>
    <PushContainer message={message} />
    <Spinner loading={loading} />
  </div>);
}

export default ListContainer;


