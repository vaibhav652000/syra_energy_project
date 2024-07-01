// frontend/src/components/TripDetail.js
import React from 'react';

const TripDetail = ({ trip }) => {
  return (
    <div>
      <h2>{trip.start} to {trip.destination}</h2>
      <p>{new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}</p>
      <p>{trip.modeOfTravel}</p>
      <p>{trip.notes}</p>
    </div>
  );
};

export default TripDetail;
