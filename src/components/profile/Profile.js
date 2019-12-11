import React from 'react';
import './profile.scss';
import { useAuth0 } from "../../react-auth0-spa";

function Profile () {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <div className="profile__wrapper">
        <img className="profile__avatar" src={user.picture} alt="Profile" />
        <div>
          <p className="profile__text"><b>{user.name}</b></p>
          <p className="profile__text">{user.email}</p>
        </div>
      </div>
  );
}

export default Profile;
