import React from 'react';

function ListItem(props) {
  return (
    <div className={'card mb-3 ' + (props.task.done ? 'border-secondary' : 'border-dark')}>
      <div className="card-body">
        <h5 className={'cardTitle ' + (props.task.done ? 'text-secondary' : '')}>{props.task.title}</h5>
        <p className={'card-text ' + (props.task.done ? 'text-secondary' : '')}>{props.task.text}</p>
      </div>
      {/*{footer}*/}
    </div>
  )
}

export default ListItem;
