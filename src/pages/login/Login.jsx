import "./login.css";
function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">GO SOCIAL</h3>
                    <span className="loginDesc">
                        Connect with hera pheri characters
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" type="text" className="loginInput" />
                      <button className="loginButton">
                          Login
                      </button>
                      <span className="loginForgot">Forgot Password</span>
                      <button className="loginRegisterButton">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
