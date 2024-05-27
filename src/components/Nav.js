// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { clearUser } from '../redux/userSlice';
import { logout } from '../redux/userSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li><Link to="/">Periods</Link></li>
            <li><Link to="/add-period">Add Period</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
