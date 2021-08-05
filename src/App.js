import './App.css';
import React, { useState } from "react"
import {Route, Switch} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import TeamRoster from './pages/TeamRoster';
import PlayerCard from './pages/PlayerCard';

function App() {

//uses the input year to get all of the teams for that specific year 
const [activeTeams, setActiveTeams] = useState([])   
//using state to track the input year
const [year, setYear] = useState(null)
// state to track favorites
const [favorites, setFavorites] = useState([])

//function to add player to favorites
const addToFavorites = (card) => {
  setFavorites([...favorites, card])
}

//function to remove player from favorites
const removeFromFavorites = (card) => {
  const index = favorites.findIndex((info) => card.id === info.id)
  const updatedArray = [...favorites]
  updatedArray.splice(index, 1)
  setFavorites(updatedArray)
}

//Function to get the teams for a specified season
const handleSubmit = async (searchYear) => {
  const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${searchYear}'`
  const response = await fetch(url)
  setYear(searchYear)
  const data = await response.json()
  setActiveTeams(data.team_all_season.queryResults.row)
}

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home handleSubmit={handleSubmit} activeTeams={activeTeams} year={year}/>
        </Route>
        <Route path="/favorites">
          <Favorites favorites={favorites} remove={removeFromFavorites} />
        </Route>
        <Route path="/team-rosters" render={(props) => <TeamRoster {...props} year={year}/>}/>
        <Route path="/player-card/:playerid" render={(routerProps) => <PlayerCard {...routerProps} year={year} addToFavorites={addToFavorites} favorites={favorites}/>}/>
      </Switch>
    </div>
  );
}

export default App;
