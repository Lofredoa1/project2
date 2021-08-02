import './App.css';
import React, { useState, useEffect } from "react"
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Teams from './components/Teams';
import Favorites from './pages/Favorites';

function App() {

//const [year, setYear] = useState(2021)
//const [activeTeams, setActiveTeams] = useState([]) //uses the input year to get all of the teams for that specific year
//Function to get the teams for a specified season
// const getTeamsBySeason = async () => {
//   const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${year}'`
//   const response = await fetch(url)
//   const data = await response.json()
//   setActiveTeams(data.team_all_season.queryResults.row)
// }
// console.log("one", activeTeams)
// useEffect(()=> {getTeamsBySeason()}, [])
// console.log(activeTeams)

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
