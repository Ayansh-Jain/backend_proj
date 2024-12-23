import { useState } from "react";
import LiveContest from "./LiveContest";
import "./aptitude.css";
import black from "../assets/black.mp4";
import AptitudeQuestions from "./aptPracticeQuestion";
import AptPrevQuestions from "./AptpreviouslyDone";

const Aptitude = () => {
  const [activeSection, setActiveSection] = useState("previouslyDone");

  const renderSection = () => {
    switch (activeSection) {
      case "previouslyDone":
        return <AptPrevQuestions />;
      case "practiceQuestions":
        return <AptitudeQuestions />;
      case "liveContest":
        return <LiveContest />;
      default:
        return <AptitudeQuestions />;
    }
  };

  return (<div className="mainmain">
     <div className="video-container">
        <video autoPlay muted loop>
          <source src={black} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    <div className="main-container1">
      {/* Navigation Buttons */}
      <nav className="navbar">
        <button
          className={`nav-button ${activeSection === "previouslyDone" ? "active" : ""}`}
          onClick={() => setActiveSection("previouslyDone")}
        >
          Previously Done
        </button>
        <button
          className={`nav-button ${activeSection === "practiceQuestions" ? "active" : ""}`}
          onClick={() => setActiveSection("practiceQuestions")}
        >
          Practice Questions
        </button>
        <button
          className={`nav-button ${activeSection === "liveContest" ? "active" : ""}`}
          onClick={() => setActiveSection("liveContest")}
        >
          Live Contest
        </button>
      </nav>

      {/* Section Content */}
      <div className="content">{renderSection()}</div>
    </div></div>
  );
};

export default Aptitude;

