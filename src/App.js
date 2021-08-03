import './App.css';
import React, { useState, useEffect } from "react"
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import TeamRoster from './pages/TeamRoster';

function App() {

//uses the input year to get all of the teams for that specific year 
const [activeTeams, setActiveTeams] = useState([])   
//using state to track the input year
const [year, setYear] = useState(null)
//state to store the team Ids
const [teamID, setTeamID] = useState([])


///////////////////////////////////////////////////////////////////// left off here....build a new array while logging each team id on the way. then can use the activeTeams and newArr to match names and ids


//new array of team names and Ids
const newArr = activeTeams.map(team => ({teamName: team.name_display_full, teamId: team.team_id}))


//Function to get the teams for a specified season
const handleSubmit = async (searchYear) => {
  const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${searchYear}'`
  const response = await fetch(url)
  setYear(searchYear)
  const data = await response.json()
  setActiveTeams(data.team_all_season.queryResults.row)
}

//stores the new team IDs once the active list of teams is called
useEffect(()=> setTeamID(newArr), [activeTeams])


  console.log("length", newArr.length)
  console.log("teamID: ", teamID)


  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home handleSubmit={handleSubmit} activeTeams={activeTeams} />
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
        <Route path="/team-rosters">
          <TeamRoster activeTeams={activeTeams} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
