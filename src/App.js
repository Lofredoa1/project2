import './App.css';
import React, { useState, useEffect } from "react"
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Teams from './pages/Teams';

function App() {

const [year, setYear] = useState(2021)
const [activeTeams, setActiveTeams] = useState([]) //uses the input year to get all of the teams for that specific year

const getTeamsBySeason = async () => {
  const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${year}'`
  const response = await fetch(url)
  const data = await response.json()
  setActiveTeams(data.team_all_season.queryResults.row)
}

useEffect(()=> {getTeamsBySeason()}, [])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/teams">
          <Teams activeTeams={activeTeams}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
