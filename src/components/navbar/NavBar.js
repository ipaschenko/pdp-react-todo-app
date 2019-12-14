import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import Profile from '../profile/Profile';
import history from '../../utils/history';

function NavBar () {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const goToMain = () => {
    history.push('/');
  };

  let navButton = isAuthenticated ?
    (<button type="button" className="btn btn-outline-info" onClick={() => logout()}>Log out</button>) :
    (<button type="button" className="btn btn-outline-info" onClick={() => loginWithRedirect({})}>Log in</button>);

  return (
  <nav className="navbar bg-secondary text-white">
    <div className="d-flex justify-content-center align-content-center">
        <img src="https://icon-library.net/images/react-icon/react-icon-14.jpg"
             style={{height: '56px', cursor: 'pointer'}}
             alt="React TODO"
             onClick={goToMain}></img>
    </div>
    <div className="d-flex justify-content-end align-content-center">
      {isAuthenticated && <Profile />}
      {navButton}
    </div>
</nav>
  )
}

export default NavBar;
