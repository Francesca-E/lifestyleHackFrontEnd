import React from 'react';

const Navigation=({isLoggedIn, signInStatus, registerOn})=>{
  if (isLoggedIn===true){
  return(
     <header className="bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
       <nav className="f6 fw6 ttu tracked">
          <button onClick={signInStatus} className= "bg-black-90 link dim white dib mr3 pa3 ma3">
          SignOut</button>
       </nav>
     </header>
  )
}else{
  return(
    <header className="bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
      <nav className="f6 fw6 ttu tracked">
        <button onClick={registerOn} className="bg-black-90 link dim white dib mr3 pa3 ma3">
         Register</button>
      </nav>
    </header>
  );
 }
}

export default Navigation;
