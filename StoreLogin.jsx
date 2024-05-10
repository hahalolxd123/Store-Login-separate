import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../Database/Database";
import "./StoreLogin.css";

function StoreLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email cannot be empty');
      return;
    }

    if (!password) {
      setPasswordError('Password cannot be empty');
      return;
    }

    if(login(email,password)){
      console.log("Login success")
      navigate('/home/dashboard')
    }
    else{
      console.log("Login error");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">Login</div>
        </div>
        <div className="form-container">
          <div className="form-inner">
            <form action="#" className="login" onSubmit={handleLogin}>
              <div className="field">
                <input type="text" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} />
                <span className="error">{emailError}</span>
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <span className="error">{passwordError}</span>
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreLogin;
