import React from 'react';
import Goal from './Goal';



const GoalList=({routeChange, deletegoal, userGoals})=>{

let goalCard=userGoals.map((item, i)=>{
  return(
     <div key={Math.random()} className='flex flex-column'>
        <button  onClick={()=>routeChange(item.goalname)}>
          <Goal key={item.id} goal={item.goalname}/>
        </button>
        <button className="bg-light-green dib br3 grow bw2 shadow-5 tc i" onClick={()=>deletegoal(item)}>delete all {item.goalname} todos</button>
    </div>
 )})

   return(
     <div>
       <ul>
         <li>{goalCard}</li>
       </ul>
     </div>
 );
}


export default GoalList;
