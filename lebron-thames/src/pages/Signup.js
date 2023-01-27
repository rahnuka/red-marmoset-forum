import "./Signup.css"
import React, { useState } from "react";
import axios from "axios";

export default function Signup(props){
  const [username, setUsername] = useState(''); //rah
  const [email, setEmail] = useState(''); //rahnuka@outlook.com
  const [password, setPassword] = useState(''); //rahnuka607


  //axios
const handleSubmit = e => {
  e.preventDefault();
  const { username, email, password } = this.state;
  console.log(username, email, password);
  axios.fetch("http:localhost:3000/register",{
    method: "POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      username,
      email,
      password
    }),
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userRegister");
  })
}
 
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
              value={username}
              onChange={(e) => this.setUsername({ username: e.target.value })}
              />
              <input type= "email" 
              placeholder="Email" 
              className="email"
              value={email}
              onChange={(e) => this.setEmail({ email: e.target.value })}
              />
              <input type={passwordShown ? "text" : "password"} 
              placeholder="Password" 
              className="password" 
              />
              <input type={passwordShown ? "text" : "password"} 
              placeholder="Password Confirm" 
              className="passwordconfirm" 
              value={password}
              onChange={(e) => this.setPassword({ password: e.target.value })}
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



  // constructor(props) 
  //   super(props);
  //   this.state = {
  //     uname: "", 
  //     email: "", 
  //     password: "", 
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
    
