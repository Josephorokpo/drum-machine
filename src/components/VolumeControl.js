import React from 'react';

const VolumeControl = ({ volume, onVolumeChange }) => {
  return (
    <div className="volume-control">
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onVolumeChange(e.target.value)}
      />
    </div>
  );
};

export default VolumeControl;
