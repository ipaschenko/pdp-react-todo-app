import React from 'react';
import ReactDOM from 'react-dom';
import { useAuth0 } from './react-auth0-spa';
import App from './App';

const user = {
  email: 'ivan@gemail.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746',
};

jest.mock('./react-auth0-spa');

describe('components/App - logged in', () => {
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
