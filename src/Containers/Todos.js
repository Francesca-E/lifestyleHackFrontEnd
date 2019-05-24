import React from 'react';


class Todos extends React.Component {
  constructor(props){
    super(props)
      this.state={
         todos:[],
         content:''
  }
}

componentDidMount(){
  fetch(`http://localhost:3000/todos/${this.props.userEmail}`)
   .then(response =>response.json())
   .then(todos=>{
     if(todos){
       this.setState({
         todos:todos
       })
    }
   })
}

  deleteTodo=(id)=>{
    fetch(' https://floating-cove-43869.herokuapp.com/todos',{
       method:'delete',
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
       email:this.props.userEmail,
       goal:this.props.route,
       id:id
     })
    })
    .then(response =>response.json())
    .then(todos=>{
      if(todos){
       this.setState({todos:todos})
      }
    })
  }


addTodo=(item)=>{
  if (item){
  fetch('https://floating-cove-43869.herokuapp.com/todos',{
     method:'post',
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
     content:item,
     goal:this.props.route,
     email:this.props.userEmail
   })
  })
  .then(response =>response.json())
  .then(todos=>{
    if(todos){
     this.setState({todos:todos})
      }
    })
   }
  }



handleChange=(event)=>{
  this.setState({
   content:event.target.value
  })
}

handleSubmit = (event)=>{
  event.preventDefault()
  this.addTodo(this.state.content)
  this.setState({content:''})
}



render(){
  const filteredTodos=this.state.todos.filter(todo =>{
  return todo.goal===this.props.route;
 })

 const todoList=filteredTodos.length  && this.props.userGoals.length ?
 (filteredTodos.map(todo=>{
    return(
      <div className='outline pa2' key={todo.id}>
        <span className="f2 lh-copy pointer" onClick={()=>{this.deleteTodo(todo.id)}}>{todo.content}</span>
      </div>
    )
  })
 )
  :
 (<p className="f2 lh-copy i">you have nothing left on your {this.props.route} list</p>)

  return(
     <div className='mt4 ml4'>
       <h1 className='ma3 link dim white dib mr3 '>To Do List:</h1>
       <h1 className='ma3 link dim white dib mr3 '>{this.props.route} list</h1>
       <input className='pa3 ma3' placeholder=" Add new todo item" type="text" onChange={this.handleChange} value={this.state.content}/>
       <button className="f6 fw6 ttu tracked grow pointer f6 ma3 outline tc pa3" value="Submit"
       onClick={this.handleSubmit}>submit</button>
       <p className='white m3'> *click item to delete</p>
       {todoList}
    </div>

  );

 }
}
 export default Todos;
