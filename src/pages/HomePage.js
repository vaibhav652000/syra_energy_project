// frontend/src/pages/HomePage.js (or where you fetch trips)
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TripContext } from '../context/TripContext';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import TripList from '../components/TripList';
import '../styles/main.css';

const HomePage = () => {
  const { trips, setTrips } = useContext(TripContext);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await axios.get(`${window.location.origin}/api/trips/getalltrips`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTrips(res.data.trips);

      } catch (error) {
        console.error(error);
      }
    };
    fetchTrips();
  }, [token, setTrips]);

  return (
    <div className="home-container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trips/new">Add Trip</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to the Travel Planner</h1>
        {trips.length > 0 ? (
          <TripList trips={trips} />
        ) : (
          <p>No trips found. Please add a new trip.</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;

