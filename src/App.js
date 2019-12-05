import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Route, Router, Switch }from 'react-router-dom';
import history from './utils/history';
import PrivateRoute from './components/PrivateRoute';
import List from './components/List';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
      <header>
        <NavBar />
      </header>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/list" component={List} />
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
