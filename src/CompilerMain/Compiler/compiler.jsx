import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import "./compiler.css";

const Compiler = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    setTimerInterval(interval);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const submitCode = () => {
    console.log("Code submitted:", code);
    console.log("Time elapsed (seconds):", elapsedTime);

    // Stop the timer when code is submitted
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="compilerMain">
      {/* Question Area */}
      <div className="questionArea">
        <h3>Question</h3>
        <p>
          Write a function that takes two integers and returns their sum. Ensure
          the function works for both positive and negative integers.
        </p>
      </div>

      <div className="workspace">
        {/* Code Editor */}
        <div className="editor">
          <div className="codenav">
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="choose-lang"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="cpp">C++</option>
            </select>
            <button onClick={submitCode} className="choose-lang">
              Run
            </button>
            <div className="timer">Time: {formatTime(elapsedTime)}</div>
          </div>
          <Editor
            height="80vh"
            width="100%"
            language={language}
            value={code}
            onChange={(newCode) => setCode(newCode)}
            theme="vs-dark"
          />
        </div>

        {/* Testcases and Output */}
        <div className="outputarea">
          <div className="testcases">
            <h4>Testcases</h4>
            <textarea id="testcases" rows={12} />
          </div>
          <div className="output">
            <h4>Output</h4>
            <div className="outputBox">Output will appear here...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
