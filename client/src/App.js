import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching message"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>React Frontend</h1>
      <p>Message from Backend:</p>
      <strong>{message}</strong>
    </div>
  );
}

export default App;


