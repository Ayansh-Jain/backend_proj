
import { Link } from "react-router-dom";

const PracticeQuestions = () => {
  const questions = [
    { sno: 1, name: "Two Sum", rating: "Easy", link: "/compiler" },
    { sno: 2, name: "Longest Substring Without Repeating Characters", rating: "Medium", link: "/problems/longest-substring" },
    { sno: 3, name: "Median of Two Sorted Arrays", rating: "Hard", link: "/problems/median-of-two-sorted-arrays" },
    { sno: 4, name: "Reverse Linked List", rating: "Medium", link: "/problems/reverse-linked-list" },
    { sno: 5, name: "Word Ladder", rating: "Hard", link: "/problems/word-ladder" },
  ];

  return (
    <div>
      <h2>Practice Questions</h2>
      <p>Select and practice problems to improve your skills.</p>
      
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={cellStyle}>S.No.</th>
            <th style={cellStyle}>Name of the Problem</th>
            <th style={cellStyle}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.sno} style={rowStyle}>
              <td style={cellStyle}>{question.sno}</td>
              <td style={cellStyle}>
                <Link to={question.link} style={linkStyle}>
                  {question.name}
                </Link>
              </td>
              <td style={cellStyle}>{question.rating}</td>
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

export default PracticeQuestions;
