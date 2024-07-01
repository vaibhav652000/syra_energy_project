// frontend/src/context/TripContext.js
import React, { createContext, useState } from 'react';

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  };

  const updateTrip = (updatedTrip) => {
    setTrips(trips.map(trip => trip._id === updatedTrip._id ? updatedTrip : trip));
  };

  const deleteTrip = (tripId) => {
    setTrips(trips.filter(trip => trip._id !== tripId));
  };

  return (
    <TripContext.Provider value={{ trips, setTrips, addTrip, updateTrip, deleteTrip }}>
      {children}
    </TripContext.Provider>
  );
};

