import React from 'react';

function ListItem(props) {

  const getFooter = (task) => {
    if (task.done) {
      return (<div className="card-footer">
        <button type="button"
                className="btn btn-sm"
                disabled={true}
                >Done</button>
        <button type="button"
                className="btn btn-sm float-right"
                onClick={() => props.onDelete(task._id)}>Delete</button>
      </div>);
    } else {
      return (<div className="card-footer">
        <button type="button"
                className="btn btn-sm"
                onClick={() => props.onDone(task._id)}>Done</button>
        <button type="button"
                className="btn btn-sm float-right"
                onClick={() => props.onDelete(task._id)}>Delete</button>
      </div>);
    }
  }

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className={'card mb-3 ' + (props.task.done ? 'border-secondary' : 'border-dark')}>
        <div className="card-body">
          <h5 className={'cardTitle ' + (props.task.done ? 'text-secondary' : '')}>{props.task.title}</h5>
          <p className={'card-text ' + (props.task.done ? 'text-secondary' : '')}>{props.task.text}</p>
        </div>
        {getFooter(props.task)}
      </div>
    </div>
  )
}

export default ListItem;
