import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import Profile from '../profile/Profile';
import './navbar.scss';

function NavBar () {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  let navButton = isAuthenticated ?
    (<button type="button" className="btn btn-outline-success" onClick={() => logout()}>Log out</button>) :
    (<button type="button" className="btn btn-outline-success" onClick={() => loginWithRedirect({})}>Log in</button>);

  return (


  <nav className="navbar navbar-light bg-light">
    <h1>Title</h1>
    <div className="float-right1">
      {isAuthenticated && <Profile />}
      {navButton}

    </div>
  </nav>
  )
}

export default NavBar;

// eslint-disable-next-line
/*<div>*/
/*  {!isAuthenticated && (*/
/*    <button onClick={() => loginWithRedirect({})}>Log in</button>*/
/*  )}*/
/*  {isAuthenticated && <button onClick={() => logout()}>Log out</button>}*/
/*</div>*/
