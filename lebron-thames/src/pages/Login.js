import "./Login.css"
import { useState } from "react";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
  setPasswordShown(!passwordShown);
};
  return (
    <div className="login">
       <form> 
       <header>Login</header>
          <div>
            <input type= "email" placeholder="Email" className="email"/>
            <input type={passwordShown ? "text" : "password"} placeholder="Password" className="password" />
            <header className='showpassword'><input type="checkbox" onClick={togglePassword}/>  Show Password</header>
          </div>
        <button type="submit" className="loginbutton">
          Login
        </button>
        <footer>
          <a 
            href="/signup"
            >Signup</a> to create an account.<br/><br/>
            <a 
            href="/sounds-like-a-0800-your-problem" className= "forgotpassword"
            >Forgot Password?</a>
        </footer>
        </form>
    </div>
  );
}




    
    export default Login;