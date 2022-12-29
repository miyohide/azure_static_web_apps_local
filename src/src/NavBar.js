import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({user}) => {
  return (
    <>
      { !user ?
        <span><a href="/login">GitHub Login</a></span> :
        <div><p><span>{user.userDetails}</span><span> <a href="/logout">Logout</a></span></p></div>
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

NavBar.propTypes = {
  // TODO: PropTypes.objectは結局なんでも受け入れてしまうため要改善
  user: PropTypes.object
};

export default NavBar;
