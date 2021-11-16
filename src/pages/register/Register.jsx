import "./register.css";
import axios from "axios";
import { useRef } from "react";
import { useHistory } from 'react-router';
export default function Register() {
    //user needs to login again afet registration

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleCick = async (e) => {
        e.preventDefault();
        if (password.current.value !== passwordAgain.current.value) {
            console.log('passwords match');
            passwordAgain.current.setCustomValidity("Password dont match")
        }
        else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post('/auth/register', user);
                history.push('/login');

            }
            catch (err) {
                console.log(err)
            }
        }
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Go Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleCick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" ref={email} required className="loginInput" />
                        <input placeholder="Password" type="password" ref={password} required className="loginInput" />
                        <input placeholder="Password Again" type="password" ref={passwordAgain} required className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}