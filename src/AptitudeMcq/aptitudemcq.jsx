import { useState, useEffect } from "react";
import black from "../assets/black.mp4";
const QuizWithImageAndTimer = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  // Submit handler
  const handleSubmit = () => {
    if (!selectedOption) {
      alert("Please select an option before submitting!");
      return;
    }

    setSubmitted(true);
    alert(`Response submitted: ${selectedOption}`);
  };

  // Question Data
  const question = {
    id: 1,
    text: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    imageUrl: "https://via.placeholder.com/150", // Replace with an actual image URL
  };

  return (
    <div style={containerStyle}>
      {/* Question Header */}
      <div style={headerStyle}>
        <h2>
          Question {question.id}/4
        </h2>
        <p style={timerStyle}>Time: {timeElapsed} seconds</p>
      </div>

      {/* Question and Image Section */}
      <div style={contentStyle}>
        <div style={questionStyle}>
          <p>{question.text}</p>
        </div>
        <img
          src={question.imageUrl}
          alt="Related to question"
          style={imageStyle}
        />
      </div>

      {/* Options */}
      <div style={optionsStyle}>
        {question.options.map((option, index) => (
          <div
            key={index}
            style={{
              ...optionContainerStyle,
              backgroundColor: selectedOption === option ? "#444" : "#2d2d2d",
            }}
            onClick={() => !submitted && setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div style={submitContainerStyle}>
        {!submitted ? (
          <button style={submitButtonStyle} onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <p style={submittedStyle}>Response: {selectedOption}</p>
        )}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  width: "400%",
  margin: "20px auto",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#1e1e1e",
  color: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const timerStyle = {
  fontSize: "14px",
  color: "lightgray",
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const questionStyle = {
  flex: 2,
  fontSize: "16px",
  marginRight: "20px",
};

const imageStyle = {
  flex: 1,
  width: "100px",
  height: "100px",
  borderRadius: "8px",
  objectFit: "cover",
};

const optionsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const optionContainerStyle = {
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "#2d2d2d",
  color: "white",
  transition: "background-color 0.3s",
};

const submitContainerStyle = {
  marginTop: "20px",
};

const submitButtonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "green",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const submittedStyle = {
  fontSize: "16px",
  color: "lightgreen",
};

export default QuizWithImageAndTimer;
