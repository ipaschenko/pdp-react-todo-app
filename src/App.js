import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Route, Router, Switch }from 'react-router-dom';
import history from './utils/history';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/PrivateRoute';

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
            <PrivateRoute path="/profile" component={Profile} />
            {/*<Route path="/profile" component={Profile} />*/}
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
