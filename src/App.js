import React from 'react';
import profileImage from './img/jayKwon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jay Kwon's Portfolio</h1>
      <img src={profileImage} alt="profile-mage" />
      <h2>1. Bachelor of Computer Science & Techno Management</h2> 
      <h2>2. Master of Cognitive Science</h2> 
      <h2>3. Entrepreneur in Cobook</h2> 
      <h2>4. Senior Research Engineer in Hyundai Motors</h2>
    </div>
  );
}

export default App;
