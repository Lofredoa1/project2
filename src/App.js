import './App.css';
import React, { useState } from "react"
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import TeamRoster from './pages/TeamRoster';

function App() {

//uses the input year to get all of the teams for that specific year 
const [activeTeams, setActiveTeams] = useState([])   


//Function to get the teams for a specified season
const handleSubmit = async (searchYear) => {
  const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${searchYear}'`
  const response = await fetch(url)
  const data = await response.json()
  setActiveTeams(data.team_all_season.queryResults.row)
}
// console.log("one", activeTeams)
//useEffect(()=> {updateYear()}, [])
// console.log(activeTeams)

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
          <TeamRoster/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
