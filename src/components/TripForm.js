// frontend/src/components/TripForm.js
import React, { useState, useContext } from 'react';
import { TripContext } from '../context/TripContext';
import axios from 'axios';

const TripForm = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [modeOfTravel, setModeOfTravel] = useState('');
  const [notes, setNotes] = useState('');
  const { addTrip } = useContext(TripContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/trips', { start, destination, startDate, endDate, modeOfTravel, notes });
      addTrip(res.data);
      setStart('');
      setDestination('');
      setStartDate('');
      setEndDate('');
      setModeOfTravel('');
      setNotes('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={start} onChange={(e) => setStart(e.target.value)} placeholder="Start" required />
      <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" required />
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      <select value={modeOfTravel} onChange={(e) => setModeOfTravel(e.target.value)} required>
        <option value="" disabled>Mode of Travel</option>
        <option value="Road">Road</option>
        <option value="Train">Train</option>
        <option value="Plane">Plane</option>
        <option value="Cruise">Cruise</option>
      </select>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
