import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './react-auth0-spa';
import history from './utils/history';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

console.log(process.env.REACT_APP_AUTH0_CONFIG_DOMAIN);
console.log(process.env.REACT_APP_AUTH0_CONFIG_CLIENT_ID);
console.log(process.env.REACT_APP_AUTH0_CONFIG_AUDIENCE);
console.log(process.env.REACT_APP_AUTH0_CONFIG_SCOPE);

ReactDOM.render(
  // <Auth0Provider
  //   domain={config.domain}
  //   client_id={config.clientId}
  //   redirect_uri={window.location.origin}
  //   audience={config.audience}
  //   onRedirectCallback={onRedirectCallback}
  // >

  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_CONFIG_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CONFIG_CLIENT_ID}
    redirect_uri={window.location.origin}
    audience={process.env.REACT_APP_AUTH0_CONFIG_AUDIENCE}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
