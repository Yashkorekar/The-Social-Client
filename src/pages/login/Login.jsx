import "./login.css";
import { loginCall } from "../../apiCalls";
import React from "react";
import { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";
function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GO SOCIAL</h3>
          <span className="loginDesc">Connect with hera pheri characters</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress size="25px" />
              ) : (
                "create new Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
