import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TripProvider } from './context/TripContext';
import HomePage from './pages/HomePage';
import TripPage from './pages/TripPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles/main.css';

const App = () => {
  return (
    <AuthProvider>
      <TripProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips/new" element={<TripPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </TripProvider>
    </AuthProvider>
  );
};

export default App;

