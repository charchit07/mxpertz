import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './Component/Navbar';
import ScienceFictionStories from './Component/Stories';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading for demonstration purposes
    }, 2000); // Set loading to false after 2 seconds (adjust as needed)
  }, []);

  return (
    <div className="App">
      
      {loading ? (
        <div className="loading-spinner">
          {/* Replace this with your loading spinner component */}
          Loading...
        </div>
      ) : (
        <div>
        <Navbar />
        <ScienceFictionStories />
        </div>
      )}
    </div>
  );
}

export default App;
