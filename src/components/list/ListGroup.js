import React from 'react';

function ListGroup(props) {
  const title = props.done === true ? 'Finished tasks' : 'Active tasks';

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h5>{title} {props.done}</h5>
        </div>
      </div>
      <div className="row">{props.list}</div>
    </>

  );
}

export default ListGroup;
