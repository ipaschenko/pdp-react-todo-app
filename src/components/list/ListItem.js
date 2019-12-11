import React from 'react';

function ListItem(props) {
  const getActions = (task) => {
    if (!task.done) {
      return (<div className="d-flex justify-content-between">
        <button type="button"
                className="btn btn-outline-info btn-sm"
                onClick={props.onDone(task._id)}>Done</button>

        <button type="button"
                className="btn btn-outline-info btn-sm"
                onClick={() => props.onEdit(task)}>Edit</button>


        <button type="button"
                className="btn btn-outline-info btn-sm"
                onClick={() => props.onDelete(task._id)}>Delete</button>
      </div>);
    }

    return null;
  };

  const getBorderColor = (task) => {
    return !task.done && task.important ? 'border-warning' : '';
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className={'card mb-3 ' + getBorderColor(props.task)}>
        <div className={'card-header bg-transparent ' + (props.task.done ? 'text-secondary' : '')}>
          {props.task.title}
        </div>

        <div className="card-body">
          <p className={'card-text ' + (props.task.done ? 'text-secondary' : '')}>{props.task.text}</p>
          {getActions(props.task)}
        </div>
      </div>
    </div>
  )
}

export default ListItem;
