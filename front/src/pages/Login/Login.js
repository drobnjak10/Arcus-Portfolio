import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();

  const handleClick = async () => {
    login({ email, password });
    if (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="section login">
      <div className="row">
        <div className="left"></div>
        <div className="right">
          <div className="form-wrapp">
            <h3 className="link">Arcus Design</h3>
            <h4>Login</h4>
            <div className="form">
              {error && <div style={{ backgroundColor: '#b53622', padding: '5px', width: '80%', color: '#fff' }}>{error}</div> }
              <div className="form-group">
                <label htmlFor="email">Email:</label> <br />
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label> <br />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login-btn" onClick={handleClick}>
                Login
              </button>
            </div>
            <div className="go-back">
              <Link to="/">Go to the site</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
