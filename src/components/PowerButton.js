// src/components/PowerButton.js
import React from 'react';
import './PowerButton.css';

const PowerButton = ({ isOn, onToggle }) => {
  return (
    <div className="power-button">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
      <span className="power-label">{isOn ? 'On' : 'Off'}</span>
    </div>
  );
};

export default PowerButton;
