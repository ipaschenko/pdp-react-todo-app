import React, { useState } from 'react';
import formValidator from '../../utils/formValidator';
import { INIT_FORM_VALUE }  from '../../constants/init-form-value';
function TaskForm(props) {
  const [formValues, setFormValues] = useState(props.initValue || INIT_FORM_VALUE);

  const handleFormControlChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  const handleCheckboxChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.checked});
  };
  
  const handlerSubmitForm = (e) => {
    e.preventDefault();
    if (formValidator(formValues)) {
      props.onFormSubmit(formValues);
    }

    if (props.mode === 'create') {
      setFormValues(INIT_FORM_VALUE);
    }
  };

  const submitButtonText = props.mode === 'create' ? 'Create' : 'Save';

  return (
    <div className='form-group'>
      <form onSubmit={handlerSubmitForm}>
        <div className='form-group'>
          <label>Title *</label>
          <input className="form-control"
                 type="text"
                 name='title'

                 value={formValues.title}
                 onChange={handleFormControlChange} required/>
        </div>

        <div className='form-group'>
          <label >Description</label>
          <textarea className="form-control"
                    name="text"
                    value={formValues.text}
                    onChange={handleFormControlChange}></textarea>
        </div>

        <div className="formGroup">
          <div className="form-check">
            <input type="checkbox"
                   className="form-check-input"
                   id="important"
                   name="important"
                   defaultChecked={formValues.important}
                   onChange={handleCheckboxChange} />
            <label className="form-check-label"
                   htmlFor="important">Important</label>
          </div>
        </div>

        <button className="btn btn-outline-info float-right"
                onClick={handlerSubmitForm}>
          {submitButtonText}</button>
      </form>
    </div>
  );
}

export default TaskForm;
