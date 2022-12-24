import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({user}) => {
  return (
    <>
      { !user ?
        <span><a href="/.auth/login/github">GitHub Login</a></span> :
        <div><p><span>{user.userDetails}</span><span> <a href="/.auth/logout">Logout</a></span></p></div>
      }
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
