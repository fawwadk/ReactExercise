import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component { 
   constructor(props){
      super(props);
	   this.initialState = {
         email: '',
         pwd: ''
      }
      this.state = this.initialState;
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
	   this.onChangeUserPwd = this.onChangeUserPwd.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      

	}
   onChangeUserEmail(e) {
      this.setState({ email: e.target.value })
   }
	onChangeUserPwd(e){
		this.setState({ pwd: e.target.value })
	}
   onSubmit(event) {
   event.preventDefault()
   const userObject = {
      email: this.state.email,
      password: this.state.pwd
   };
   axios.post('http://127.0.0.1:5000/login-post', userObject)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });
}
   render(){
      return (
         <div className ="container">
         <h2>Login Form</h2>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input type="email"className ="form-control" id="email" 
               placeholder="Enter email" name="email" 
               value={this.state.email} onChange={this.onChangeUserEmail}/>
               </div>
               <div className="form-group">
               <label htmlFor="pwd">Password:</label>
               <input type="password" className ="form-control" id="pwd"
               placeholder="Enter password" name="pwd" 
               value={this.state.pwd} onChange={this.onChangeUserPwd}/>
               </div>
               <button type="submit" className ="btn btn-default">Submit</button>
            </form>
         </div>
      );
   }
}


export default Login;