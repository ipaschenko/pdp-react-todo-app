import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import AlertError from './shared/AlertError';

function List() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState('This is test errorrrrrr text!');

  useEffect(() => {
    axios.get('http://localhost:5000/list')
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error: ', err);
        setError(error);
      });
  });

  // let loadingView = loading && (<div className="spinner-grow text-success" role="status">
  //   <span className="sr-only">Loading...</span>
  // </div>);
  return (<div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <AlertError text={error} />
            {loading}
          </div>
        </div>
        List
      </div>);
}

export default List;


