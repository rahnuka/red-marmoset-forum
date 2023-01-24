import "./Signup.css"
import { useState } from "react";
import React, { Component } from "react";

export default class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      uname: "", //rah
      email: "", //rahnuka@outlook.com
      password: "", //rahnuka607
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
handleSubmit(e) {
  e.preventDefault();
  const { uname, email, password } = this.state;
  console.log(uname, email, password);
  fetch("http:localhost:5000/register",{
    method: "POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      uname,
      email,
      password
    }),
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userRegister");
  })
}
 
  render() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown); 
    return (
      <form className="signup" onSubmit={this.handleSubmit}>
        <div className="noboddy"> 
        <header>Sign up</header>
            <div>
              <input type= "text" 
              placeholder="Username" 
              className="username"
              onChange={(e) => this.setState({ uname: e.target.value })}
              />
              <input type= "email" 
              placeholder="Email" 
              className="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              />
              <input type={passwordShown ? "text" : "password"} 
              placeholder="Password" 
              className="password" 
              />
              <input type={passwordShown ? "text" : "password"} 
              placeholder="Password Confirm" 
              className="passwordconfirm" 
              onChange={(e) => this.setState({ password: e.target.value })}
              />
              <header className='showpassword'><input type="checkbox" onClick={togglePassword}/>  Show Password</header>
            </div>
          <button type="submit" className="loginbutton">
            Sign up
          </button>
          <footer>
            Already a member?
            <a 
              href="/login"
              >Log in</a>
          </footer>
          </div>
      </form>
  );
}
}
}
