
import './App.css'
import SignUp from './Signup/signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Signup/login';
import LeaderboardPage from './leaderboard/leaderboard';
import Dashboard from './dashboard/dashboard';
import Home from './home/home';
import Compiler from './CompilerMain/Compiler/compiler';
import MainPage from './QuestionList/MainPage';
import Aptitude from './Aptitude/Aptitude';
import AptitudeMCQ from './AptitudeMcq/aptitudemcq';
function App() {

  return (
   <div>
     <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/leaderboard" element={<LeaderboardPage />} /> 
        <Route path="/mainPage" element={<MainPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="aptitude" element={<Aptitude/>} />
        <Route path="aptitudemcq" element={<AptitudeMCQ/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
