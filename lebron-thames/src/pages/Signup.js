import "./Signup.css"
import { useState } from "react";

function Signup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
  return (
    <div className="signup">
       <body> 
       <header>Sign up</header>
          <div>
            <input type= "email" placeholder="Email" className="email"/>
            <input type= "text" placeholder="Username" className="username"/>
            <input type={passwordShown ? "text" : "password"} placeholder="Password" className="password" />
            <input type={passwordShown ? "text" : "password"} placeholder="Password Confirm" className="passwordconfirm" />
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
        </body>
    </div>
  );
}
    
    export default Signup;