import React, {Component} from 'react';
import SignIn from './SignIn';
import Navigation from '../Components/Navigation';
import Register from './Register';
import Home from './Home';




class App extends Component {
  constructor(){
    super()
    this.state={
        isLoggedIn:false,
        register:false,
        user:{
          id:'',
          name:'',
          email:'',
        }
    }
  }


signInStatus=()=>{
  if (this.state.isLoggedIn===false){
      this.setState({isLoggedIn:true})
  }else if (this.state.isLoggedIn===true){
     this.setState({isLoggedIn:false})
  }
}

registerOn=()=>{
  if (this.state.register===false){
     this.setState({register:true})
  }else if (this.state.register===true){
    this.setState({register:false})
  }
}

loadUser=(data)=>{
  this.setState({
       user:{
           id:data.id,
           name:data.name,
           email:data.email,
         },
       })
  }




render() {
  const {isLoggedIn} = this.state;
  const {register} = this.state;
  let page;

  if (isLoggedIn===false && register===false) {
   page =
    <div>
     <Navigation isLoggedIn={this.state.isLoggedIn} signInStatus={this.signInStatus}  registerOn={this.registerOn}/>
     <SignIn isLoggedIn={this.state.isLoggedIn} signInStatus={this.signInStatus} loadUser={this.loadUser}/>
    </div>

  } else if (isLoggedIn===false && register===true){
   page=
   <div>
     <Navigation isLoggedIn={this.state.isLoggedIn} signInStatus={this.signInStatus} registerOn={this.registerOn}/>
     <SignIn   isLoggedIn={this.state.isLoggedIn} signInStatus={this.signInStatus} loadUser={this.loadUser}/>
     <Register signInStatus={this.signInStatus} loadUser={this.loadUser} registerOn={this.registerOn} />
    </div>

  } else if (isLoggedIn===true){
   page=
    <div>
     <Navigation isLoggedIn={this.state.isLoggedIn} signInStatus={this.signInStatus}  registerOn={this.registerOn}/>
     <Home currentUser={this.state.user}/>
    </div>
}

  return (
    <div>
        {page}
    </div>
  );
 }
}



export default App;
