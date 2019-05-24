import React from 'react';

const Goal =(props)=>{
  return(
    <div className="bg-light-green dib br3 grow bw2 shadow-5 tc">
        <img alt='goal' src={`https://api.adorable.io/avatars/280/${props.goal}@adorable.io.png`}/>
        <h1 className="f4">{props.goal}</h1>
   </div>
  );
}

export default Goal;

// http://lorempixel.com/320/240/sorts
// https://api.adorable.io/avatars/280/${props.goal}@adorable.io.png
// http://lorempixel.com/280/240/abstract/${props.key}
