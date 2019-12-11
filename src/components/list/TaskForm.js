import React, { useState } from 'react';
import formValidator from '../../utils/formValidator';

function TaskForm(props) {
  const initFormValue = props.initValue || {title: '', text: '', important: false};
  const [values, setValues] = useState(initFormValue);

  const handleFormControlChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleCheckboxChange = (e) => {
    setValues({...values, [e.target.name]: e.target.checked}, () => {});
  }
  
  const handlerSubmitForm = (e) => {
    e.preventDefault();
    if (formValidator(values)) {
      console.log(values);
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

        <div className="formGroup">
          <div className="form-check">
            <input type="checkbox"
                   className="form-check-input"
                   id="important"
                   name="important"
                   defaultChecked={values.important}
                   onChange={handleCheckboxChange} />
            <label className="form-check-label"
                   htmlFor="important">Important</label>
          </div>
        </div>

        <button className="btn btn-outline-info float-right"
                onClick={handlerSubmitForm}>Create</button>
      </form>
    </div>
  );
}

export default TaskForm;
