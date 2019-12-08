import React, { useState } from 'react';

function TaskForm() {


  useState() {}

  render() {
    return (
      <div className='form-group'>
        <form>
          <div className='form-group'>
            <input className="form-control"
                   type="text"
                   name='title'
                   placeholder="Title"
                   value={this.state.title}
                   onChange={this.handleFormControlChange} required/>
          </div>

          <div className='form-group'>
            <textarea className="form-control"
                      name="text"
                      placeholder="Text"
                      value={this.state.text}
                      onChange={this.handleFormControlChange}></textarea>
          </div>

          <button className="btn btn-outline-primary float-right"
                  onClick={this.submitForm}>Create</button>
        </form>
      </div>

    );
  }
}

export default TaskForm;
