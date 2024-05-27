// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser, clearUser } from './redux/userSlice';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import AddPeriod from './components/AddPeriod';
import Periods from './components/Periods';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={user ? <Periods /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-period" element={user ? <AddPeriod /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

