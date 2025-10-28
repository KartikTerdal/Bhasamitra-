import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [userType, setUserType] = useState("startup");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";

    try {
      const response = await axios.post(`${url}${endpoint}`, {
        ...data,
        role: userType,
      });

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        setShowLogin(false);

        // Navigate by role
        if (userType === "startup") navigate("/startup-application");
        else navigate("/hni-dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="login-page-left">
          <img src="/logy.png" alt="Login visual" />
        </div>

        <div className="login-page-right">
          <div className="login-close-icon">
            <img
              src={assets.cross_icon}
              alt="Close"
              onClick={() => setShowLogin(false)}
            />
          </div>

          <h2>
            {currState} as {userType === "startup" ? "Startup/SME" : "HNI"}
          </h2>

          <div className="user-type-toggle">
            <button
              className={userType === "startup" ? "active" : ""}
              onClick={() => setUserType("startup")}
            >
              Startup / SME
            </button>
            <button
              className={userType === "hni" ? "active" : ""}
              onClick={() => setUserType("hni")}
            >
              HNI Investor
            </button>
          </div>

          <form onSubmit={onLogin}>
            {currState === "Sign Up" && (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your name"
                required
              />
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Email"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />

            <div className="remember-me">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>

            <button type="submit">
              {currState === "Sign Up" ? "Create Account" : "Sign In"}
            </button>
          </form>

          <p>
            {currState === "Login" ? "New here? " : "Already have an account? "}
            <span onClick={() => setCurrState(currState === "Login" ? "Sign Up" : "Login")}>
              Click Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
