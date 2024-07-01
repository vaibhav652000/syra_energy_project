import React from 'react';
import TripDetail from './TripDetail';

const TripList = ({ trips }) => {
  return (
    <div>
      {trips && trips.length > 0 ? (
        trips.map((trip) => <TripDetail key={trip._id} trip={trip} />)
      ) : (
        <p>No trips available</p>
      )}
    </div>
  );
};

export default TripList;
