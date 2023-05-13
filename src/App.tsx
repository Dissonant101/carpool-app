import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, LoginButton, LogoutButton, Map } from './components';
import { MAP_PANE } from '@react-google-maps/api';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LoginButton />
      <LogoutButton />
    </Router>
  );
}

export default App;
