import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home } from './components';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import RideRequest from './components/RideRequest';
import RideSearch from './components/RideSearch';


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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/ride-request' element={<RideRequest/>} />
        <Route path='/ride-search' element={<RideSearch/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
