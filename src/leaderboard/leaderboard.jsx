import black from "../assets/black.mp4";
import "./Leaderboard.css";

const LeaderboardPage = () => {
  const dsaLeaderboard = [
    { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 },
    { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 }, { rank: 1, username: "Alice", rating: 1500 },
    { rank: 2, username: "Bob", rating: 1400 },
    { rank: 3, username: "Charlie", rating: 1300 },
    { rank: 4, username: "Dave", rating: 1200 },
  ];

  const aptitudeLeaderboard = [
    { rank: 1, username: "Eve", rating: 1450 },
    { rank: 2, username: "Frank", rating: 1350 },
    { rank: 3, username: "Grace", rating: 1250 },
    { rank: 4, username: "Hank", rating: 1150 },
  ];

  return (<div className="leaderboardMain">
    <div className="video-container">
        <video autoPlay muted loop>
          <source src={black} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    <div className="leaderboard-container">
      <div className="leaderboard-table">
        <h2>DSA Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>DSA Rating</th>
            </tr>
          </thead>
          <tbody>
            {dsaLeaderboard.map((user, index) => (
              <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.username}</td>
                <td>{user.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="leaderboard-table">
        <h2>Aptitude Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Aptitude Rating</th>
            </tr>
          </thead>
          <tbody>
            {aptitudeLeaderboard.map((user, index) => (
              <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.username}</td>
                <td>{user.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>
  );
};

export default LeaderboardPage;
