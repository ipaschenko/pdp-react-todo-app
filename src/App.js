import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import NavBar from './components/navbar/NavBar';
import { Route, Router, Switch, Redirect }from 'react-router-dom';
import history from './utils/history';
import PrivateRoute from './components/PrivateRoute';
import ListContainer from './components/list/ListContainer';
import WelcomePage from './components/WelcomePage';

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
        <Switch>
          <Route path="/start" component={WelcomePage} />
          <PrivateRoute path="/list" component={ListContainer} />
          <Redirect from="/" to="list"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
