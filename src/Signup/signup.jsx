import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./signup.css";
import black from "../assets/black.mp4";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully:", formData);
    // Redirect to another page after form submission
    navigate("/dashboard"); // Replace "/dashboard" with the path you want to redirect to
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
            <h2>Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your Username"
            />
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
            {formData.password.length > 0 && formData.password.length < 8 && (
              <span>Password should contain at least 8 characters</span>
            )}
            <button type="submit" className="btn1">Sign Up</button>
          </form>
          <p className="p1">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
