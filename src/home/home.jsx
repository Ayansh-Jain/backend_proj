
import { Link } from "react-router-dom";
import "./home.css";
import black from "../assets/black.mp4";
const Home = () => {
  return (
    <div className="home">
        <div className="video-container">
        <video autoPlay muted loop>
          <source src={black} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="navbar2">
        <div className="logoi">
          <img src="\src\assets\LOGO.jpg" alt="" height={"150px"} width={"150px"}/>
        </div>
        <div className="nav-buttons">
          <Link to="/signup">
            <button className="signbtn">Sign Up</button>
          </Link>
        </div>
        </div>
     
        <div className="main-section">
        <h2>Welcome to BrainBytes</h2>
        <p id="p3">
          MyWebsite is your one-stop platform for mastering Data Structures &
          Algorithms, improving your Aptitude, and competing on Leaderboards.
          Start your journey today!
        </p>
        <Link to="/signup">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is MyWebsite?</h3>
          <p>
            MyWebsite is a platform to enhance your coding and problem-solving
            skills while competing with others globally.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do I sign up?</h3>
          <p>
            Click on the Sign Up button at the top of the page to create an
            account and start your journey!
          </p>
        </div>
        <div className="faq-item">
          <h3>Is MyWebsite free?</h3>
          <p>
            Yes, MyWebsite is completely free for all users. Sign up today to
            unlock all features!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

