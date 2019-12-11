import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem(props) {
  const getActions = (task) => {
    if (!task.done) {
      return (<div className="d-flex justify-content-end">
        <button type="button"
                className="btn btn-outline-info btn-sm"
                onClick={() => props.onDone(task._id)}>
          <FontAwesomeIcon icon="check" className="mr-1" />
          Done
        </button>

        <button type="button"
                className="btn btn-outline-info btn-sm"
                onClick={() => props.onEdit(task)}>
          <FontAwesomeIcon icon="edit" className="mr-1" />
          Edit
        </button>


        <button type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => props.onDelete(task._id)}>
          <FontAwesomeIcon icon="trash-alt" className="mr-1" />
          Delete</button>
      </div>);
    }

    return null;
  };

  const importance =
    props.task.important ? <FontAwesomeIcon icon="exclamation-circle" className="text-danger mr-1 " /> : null;

  const getAdditionalStyles = (task) => {
    if (task.done) {
      return 'text-secondary';
    }

    if (!task.done && task.important) {
      return 'border-info';
    }return '';
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className={'card mb-3 ' + (props.task.done ? 'text-secondary' : '')}>
        <div className="card-body">
          <h5 className="card-title">{importance} {props.task.title}</h5>
          <p className="card-text">{props.task.text}</p>
          {getActions(props.task)}
        </div>
      </div>
    </div>
  )
}

export default ListItem;
