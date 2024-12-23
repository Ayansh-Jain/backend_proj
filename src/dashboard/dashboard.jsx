import "./dashboard.css"
import { Link } from "react-router-dom";
import black from "../assets/black.mp4";
const Dashboard = () => {
  return (<div className="dashboardMain">
    <div className="video-container">
        <video autoPlay muted loop>
          <source src={black} type="video/mp4" />
          Your browser does not support the video tag.
        </video></div>
    <div className="container2">
      <Link to="/mainpage">
        <div className="a">
          <p className="p2" id="dsa">DSA</p>
        </div></Link> 
        <Link to="/aptitude">
      <div className="a" >
        <p className="p2" id="apti">Aptitude</p>
            
      </div></Link>
      <Link to="/leaderboard" id="lb">
            <div className="a" >
      <p className="p2">Leaderboard</p>
      </div>
          </Link>
      
    </div></div>
  )
}

export default Dashboard;
