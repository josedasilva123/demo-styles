import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WelcomePage from './pages/WelcomePage';
import TeamPage from './pages/TeamPage';

function App() {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: "Alex",
      job: "Instrutor"
    },
    {
      id: 1,
      name: "Tsunode",
      job: "Instrutor",
    },
    {
      id: 2,
      name: "Igor",
      job: "Monitor"
    },
    {
      id: 3,
      name: "Kelly",
      job: "Monitor"
    }
  ])
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div className="App">
        {currentPage === "" && <WelcomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "team" && <TeamPage team={team} setCurrentPage={setCurrentPage} />}
    </div>
  )
}

export default App
