// src/components/AddPeriod.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPeriod } from '../redux/periodSlice';

const AddPeriod = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPeriod({ startDate, endDate, temperature, weight, height, userId: user.uid }));
    // Clear the form fields after submitting
    setStartDate('');
    setEndDate('');
    setTemperature('');
    setWeight('');
    setHeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
        placeholder="Start Date" 
        required 
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
        placeholder="End Date" 
        required 
      />
      <input 
        type="number" 
        value={temperature} 
        onChange={(e) => setTemperature(e.target.value)} 
        placeholder="Temperature" 
        required 
      />
      <input 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        placeholder="Weight" 
        required 
      />
      <input 
        type="number" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        placeholder="Height" 
        required 
      />
      <button type="submit">Add Period</button>
    </form>
  );
};

export default AddPeriod;
