import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { auth, signinWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import style from '../style/Login.module.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
    }, [user, loading]);
    
    return (
      <div className={style.login}>
        <div className={style.login__container}>
          <input
            type="text"
            className={style.login__textBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className={style.login__textBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className={style.login__btn + " " + style.login__email}
            onClick={() => signinWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className={style.login__btn + " " + style.login__google} onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    );
  }
  export default Login;