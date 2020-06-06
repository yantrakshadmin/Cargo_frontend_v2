import React from 'react';

export const GetTruckType=({ array })=>{
  return(
    <div className='column p-1 align-center'>
      {array.map((i)=>{
        switch (i) {
          case 1 : return(
            <div className='m-1'>
              Transporter
            </div>
          );
          case 2: return(
            <div className='m-1'>
              Broker
            </div>
          );
          case 3: return(
            <div className='m-1'>
              Fleet Owner
            </div>
          );
          default : return null
        }
      })}
    </div>
  )
}
