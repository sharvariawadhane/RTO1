import React, { useState } from 'react';

function Login({ onLogin }) {
  const [serviceNumber, setServiceNumber] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (serviceNumber && name) {
      onLogin({ serviceNumber, name });
    }
  };

  return (
    <div className="login">
      <h2>Login to RTO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Number"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

