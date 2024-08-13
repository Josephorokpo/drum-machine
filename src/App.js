import React, { useState, useEffect } from 'react';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import VolumeControl from './components/VolumeControl';
import './App.css';


const drumPads = [
  { id: 'Q', clip: 'audio/Heater-1.mp3', description: 'Heater 1' },
  { id: 'W', clip: 'audio/Heater-2.mp3', description: 'Heater 2' },
  { id: 'E', clip: 'audio/Heater-3.mp3', description: 'Heater 3' },
  { id: 'A', clip: 'audio/Heater-4.mp3', description: 'Heater 4' },
  { id: 'S', clip: 'audio/Clap.mp3', description: 'Clap' },
  { id: 'D', clip: 'audio/Open-HH.mp3', description: 'Open-HH' },
  { id: 'Z', clip: 'audio/Kick-n-Hat.mp3', description: 'Kick-n-Hat' },
  { id: 'X', clip: 'audio/Kick.mp3', description: 'Kick' },
  { id: 'C', clip: 'audio/Closed-HH.mp3', description: 'Closed-HH' }
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
