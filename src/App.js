import React, { useState } from 'react';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setError(false); 
  };

  const handleReject = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 1000); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Ro, te extraño mucho y quiero verte cuando vuelvas</h1>
        <p>Te invito a una cita y te que quedes en casa conmigo, aceptas?</p>
        <div className="buttons">
          <button className="yes-button" onClick={handleAccept}>Sí</button>
          <button className="no-button" onClick={handleReject} disabled={loading || accepted}>
            {loading ? '⏳' : 'No'}
          </button>
        </div>
        {accepted && <p className="accepted-message">Siiii! 🎉</p>}
        {error && !accepted && <p className="error-message">Error, opción no disponible</p>}
      </header>
    </div>
  );
}

export default App;
