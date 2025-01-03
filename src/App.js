import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated here
import { Button, Container, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <Router>
      <Container>
        <Typography variant="h4" gutterBottom>
          RTO Special Services
        </Typography>
        <Routes> {/* Updated here */}
          <Route path="/" element={<HomePage location={location} />} /> {/* Updated here */}
        </Routes> {/* Updated here */}
      </Container>
    </Router>
  );
};

const HomePage = ({ location }) => {
  return (
    <div>
      {location ? (
        <>
          <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[location.lat, location.lng]}>
              <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
          <Button variant="contained" color="primary">
            Get Status Updates
          </Button>
        </>
      ) : (
        <Typography>Loading location...</Typography>
      )}
    </div>
  );
};

export default App;
