import React from 'react';
import * as axios from 'axios';
import AlertError from './shared/AlertError';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: false,
      error: 'This is test errorrrrrr text!',
    };
  }

  componentDidMount() {
    this.setState({loading: true}, () => this.fetchData());
  }

  fetchData = () => {
    axios.get('http://localhost:5000/list')
      .then((res) => {
        console.log(res.data);
        this.setState({
          list: res.data,
          loading: false,
        })
      })
      .catch((err) => {
        console.log('Error: ', err);
        this.setState({error: err});
      });
  };

  render() {
    let loading = this.state.loading && (<div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <AlertError text={this.state.error} />
            {loading}
          </div>
        </div>


        List
      </div>
    );
  }

}

export default List;


