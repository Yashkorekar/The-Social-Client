import "./login.css";
import { loginCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";
function Login() {

    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleClick = () => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)

    }
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
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size='25px' /> : Login}
                        </button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress size='25px' /> : Login}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
