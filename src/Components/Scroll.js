import React from 'react';

const Scroll =(props) =>{
return(
  <div className='flex flex-wrap ma3 mr4' style={{overflow: 'scroll', border:'2px solid white', width:'400px', height:'800px',}}>
   {props.children}
  </div>
 );
}
export default Scroll;
  //{} as a js then another {} because it is an object with css style in it.
