import React, {Component} from 'react';
import Scroll from '../Components/Scroll';
import GoalList from '../Components/GoalList';
import Todos from './Todos';


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
        searchField:'',
        route:'',
        goals:[]
    }
  }

componentDidMount(){
  fetch(`https://floating-cove-43869.herokuapp.com/${this.props.currentUser.email}`)
   .then(response =>response.json())
   .then(goals=>{
     if(goals){
       this.setState({
         goals:goals
       })
     }
   })
  }

  deleteGoal=(item)=>{
    fetch('https://floating-cove-43869.herokuapp.com/home',{
       method:'delete',
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
       email:this.props.currentUser.email,
       id:item.id,
       goalname:item.goalname
     })
    })
    .then(response =>response.json())
    .then(goals=>{
     if(goals){
      this.setState({goals:goals})
      }
    })
  }


addGoal=(item)=>{
  if(item){
   fetch('https://floating-cove-43869.herokuapp.com/home',{
    method:'post',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
    email:this.props.currentUser.email,
    goalname:item,
   })
  })
  .then(response =>response.json())
  .then(goal=>{
    if(goal){
    this.setState({goals:goal})
   }
  })
 }
}


  onSearchChange=(event)=>{
    event.preventDefault()
    this.setState({searchField:event.target.value})
  }

  routeChange = (goal)=>{
    this.setState({route:goal})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.addGoal(this.state.searchField)
    this.setState({searchField:''})
  }


render(){
   let section;
   if (!this.state.goals.length|| !this.state.route) {
       section=<h1 className='tc mt7 outline'>Create a separate to-do list for each of your goals.
       Add a new goal and then click on the face to create a corresponding to-do list</h1>
   }else{
        section=
          <Todos userGoals={this.state.goals} route={this.state.route} userEmail={this.props.currentUser.email}/>
  }

  return (

  <div className="flex items-start justify-around">
   <div className='fl w-30 pa2 '>
     <h1 className='ma3 link dim white dib mr3 mt4'> {`${this.props.currentUser.name}'s Goals`}</h1>
       <input className='pa3 ma3 b--black bg-lightest-green tc' type='search'  placeholder='add a goal'
         onChange={this.onSearchChange} value={this.state.searchField}/>
       <button className="f6 fw6 ttu tracked grow pointer f6 ma3 outline tc pa3" value="Submit"
       onClick={this.handleSubmit}>submit</button>
    <Scroll>
        <GoalList routeChange={this.routeChange} deletegoal={this.deleteGoal} userGoals={this.state.goals}/>
    </Scroll>
  </div>
  <div className='fl w-30'>
    {section}
  </div>
</div>
   );
  }
}


export default Home;
