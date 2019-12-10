import React from 'react';
import ListItem from './ListItem';

function ListGroup (props) {
  const list = props.list.map((item) => <ListItem task={item} key={item._id} onDelete={props.onDelete}/>);
  return (
    <div className="row">
      {list}
    </div>
  );
}

export default ListGroup;
