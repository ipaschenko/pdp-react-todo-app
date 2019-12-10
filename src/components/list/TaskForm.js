import React, { useState } from 'react';
import formValidator from '../../utils/formValidator';

function TaskForm(props) {
  const initFormValue = {title: '', text: ''};
  const [values, setValues] = useState(initFormValue);

  const handleFormControlChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };
  
  const handlerSubmitForm = (e) => {
    e.preventDefault();
    if (formValidator(values)) {
      props.onFormSubmit(values);
      setValues(initFormValue);
    }
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
