import React from 'react';

export const MapArray = ({ array, containerClass }) => {
  return (
    <div className={containerClass}>
      {array.map((i) => (
        <div className='m-1' key={i}>
          {i}
        </div>
      ))}
    </div>
  );
};
