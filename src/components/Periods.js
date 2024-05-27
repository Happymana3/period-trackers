// src/components/Periods.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeriods } from '../redux/periodSlice';

const Periods = () => {
  const dispatch = useDispatch();
  const periods = useSelector((state) => state.periods.data);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchPeriods(user.id));
    }
  }, [dispatch, user]);

  return (
    <div>
      <h1>Periods</h1>
      <ul>
        {periods.map((period) => (
          <li key={period.id}>
            {period.startDate} - {period.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Periods;
