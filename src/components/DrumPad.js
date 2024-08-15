import React from 'react';

const DrumPad = ({ id, clip, description, onClick }) => (
  <div className="drum-pad" id={id} onClick={() => onClick(id)}>
    {id}
    <audio id={id} src={process.env.PUBLIC_URL + clip} className="clip" />
  </div>
);

export default DrumPad;
