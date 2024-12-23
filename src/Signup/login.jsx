import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./signup.css";  // You can use the same CSS file for styling
import black from "../assets/black.mp4";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted successfully:", formData);
    alert("Login successful!");
  };

  return (
    <div className="signupMain">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={black} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container1">
        <div className="signup">
          <div className="h2">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your Email"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your Password"
            />
            <button type="submit" className="btn1">Login</button>
          </form>
          <p className="p1">
            Do not have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
