import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <span className="logo">CINECLICK</span>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">
            <Link to="/" className="link">
              Sign In
            </Link>
          </button>
          <span>
            New to Netflix ? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
