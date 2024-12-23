import { Link } from "react-router-dom";

const AptitudeQuestions = () => {
  const aptitudeQuestions = [
    { sno: 1, name: "Time and Work", difficulty: "Medium", link: "/aptitudemcq" },
    { sno: 2, name: "Probability", difficulty: "Hard", link: "/aptitude/probability" },
    { sno: 3, name: "Average Problems", difficulty: "Easy", link: "/aptitude/average-problems" },
    { sno: 4, name: "Number Series", difficulty: "Medium", link: "/aptitude/number-series" },
    { sno: 5, name: "Permutation and Combination", difficulty: "Hard", link: "/aptitude/permutation-and-combination" },
  ];

  return (
    <div>
      <h2>Aptitude Questions</h2>
      <p>Practice aptitude questions to strengthen your problem-solving skills.</p>
      
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={cellStyle}>S.No.</th>
            <th style={cellStyle}>Name of the Question</th>
            <th style={cellStyle}>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {aptitudeQuestions.map((question) => (
            <tr key={question.sno} style={rowStyle}>
              <td style={cellStyle}>{question.sno}</td>
              <td style={cellStyle}>
                <Link to={question.link} style={linkStyle}>
                  {question.name}
                </Link>
              </td>
              <td style={cellStyle}>{question.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for the table
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
  fontSize: "16px",
  textAlign: "left",
};

const headerRowStyle = {
  backgroundColor: "rgb(48, 48, 48,0.7)",
  color: "white",
};

const rowStyle = {
  backgroundColor: "rgb(48, 48, 48,0.7)",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default AptitudeQuestions;
