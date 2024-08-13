import React from 'react';

const DrumPad = ({ id, clip, description, onClick }) => {
  return (
    <div className="drum-pad" id={id} onClick={() => onClick(id)}>
      <audio className="clip" id={id} src={clip}></audio>
      {id}
    </div>
  );
};

export default DrumPad;
