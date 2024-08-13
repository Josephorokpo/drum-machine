// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import VolumeControl from './components/VolumeControl';
import PowerButton from './components/PowerButton';
import './App.css';

const drumPads = [
  { id: 'Q', clip: '/audio/Heater-1.mp3', description: 'Heater 1' },
  { id: 'W', clip: '/audio/Heater-2.mp3', description: 'Heater 2' },
  { id: 'E', clip: '/audio/Heater-3.mp3', description: 'Heater 3' },
  { id: 'A', clip: '/audio/Heater-4.mp3', description: 'Heater 4' },
  { id: 'S', clip: '/audio/Clap.mp3', description: 'Clap' },
  { id: 'D', clip: '/audio/Open-HH.mp3', description: 'Open-HH' },
  { id: 'Z', clip: '/audio/Kick-n-Hat.mp3', description: 'Kick-n-Hat' },
  { id: 'X', clip: '/audio/Kick.mp3', description: 'Kick' },
  { id: 'C', clip: '/audio/Closed-HH.mp3', description: 'Closed-HH' }
];

function App() {
  const [displayText, setDisplayText] = useState('');
  const [volume, setVolume] = useState(1);
  const [isOn, setIsOn] = useState(true);

  const playAudio = useCallback((id) => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.volume = volume;
      audio.play();
    }
  }, [volume]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOn) {
        const drumPad = drumPads.find(pad => pad.id === e.key.toUpperCase());
        if (drumPad) {
          playAudio(drumPad.id);
          setDisplayText(drumPad.description);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOn, playAudio]);

  const handlePadClick = (id) => {
    if (isOn) {
      const drumPad = drumPads.find(pad => pad.id === id);
      if (drumPad) {
        playAudio(id);
        setDisplayText(drumPad.description);
      }
    }
  };

  const handlePowerToggle = () => {
    setIsOn(prevIsOn => {
      const newState = !prevIsOn;
      /* setDisplayText(newState ? 'Power On' : 'Power Off'); */
      return newState;
    });
  };

  return (
    <div id="drum-machine">
      <PowerButton isOn={isOn} onToggle={handlePowerToggle} />
      <Display text={displayText} />
      <div id="drum-pads">
        {drumPads.map(pad => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            clip={pad.clip}
            description={pad.description}
            onClick={handlePadClick}
          />
        ))}
      </div>
      <VolumeControl volume={volume} onVolumeChange={setVolume} />
    </div>
  );
}

export default App;
