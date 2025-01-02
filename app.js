import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  // Get user location using the browser's Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome {user.name}</h2>
          <div>
            <h3>Your Location:</h3>
            <p>Latitude: {location?.latitude}</p>
            <p>Longitude: {location?.longitude}</p>
          </div>
          <div>
            <h3>Service Dashboard</h3>
            {/* Here you can display real-time service updates */}
            <p>Real-time status: Your request is being processed.</p>
          </div>
          {/* Add a map or location-based functionality */}
          <div>
            <h3>Navigate RTO</h3>
            {/* Display map with RTO office location */}
            <p>Map of RTO will go here (this can be integrated with Google Maps API or any other map library).</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

