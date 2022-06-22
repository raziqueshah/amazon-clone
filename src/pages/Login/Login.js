import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user} = useSelector(state => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate('/');
    }
  },[user, dispatch])

  const signIn = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email,password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo"  src={AmazonLogo} alt="logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signIn">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazons Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p>New to Amazon ?</p>
      <Link to="/register">
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
  );
};

export default Login;
