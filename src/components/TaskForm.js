import React, { useState } from 'react';
import * as axios from 'axios';
import { useAuth0 } from '../react-auth0-spa';

function TaskForm() {
  const {getTokenSilently} = useAuth0();

  const [values, setValues] = useState({title: '', text: ''});

  const handleFormControlChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };
  
  const handlerSubmitForm = (e) => {
    e.preventDefault();
    if (values.title.length && values.text.length) {
      createTask();
    }
  };

  const createTask = async () => {
    const headers = {Authorization: `Bearer ${await getTokenSilently()}`};
    axios.post('http://localhost:5000/list', values, {headers}).then(() => {});
  };

  return (
    <div className='form-group'>
      <form onSubmit={handlerSubmitForm}>
        <div className='form-group'>
          <input className="form-control"
                 type="text"
                 name='title'
                 placeholder="Title"
                 value={values.title}
                 onChange={handleFormControlChange} required/>
        </div>

        <div className='form-group'>
          <textarea className="form-control"
                    name="text"
                    placeholder="Text"
                    value={values.text}
                    onChange={handleFormControlChange}></textarea>
        </div>

        <button className="btn btn-outline-primary float-right"
                onClick={handlerSubmitForm}>Create</button>
      </form>
    </div>
  );
}

export default TaskForm;
