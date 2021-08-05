import React, { useState, useEffect } from "react"
import logo from "../img/baseball-player-img.jpeg"
import "../App.css"

const PlayerCard = (props) => {
    const [careerStats, setCareerStats] = useState([])
    const playerID = props.location.state.playerid; 


//API call to get the active roster
const getPlayerDetails = async () => {
    const url = `http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${playerID}'`
    const response = await fetch(url)
    const data = await response.json()
    setCareerStats(data.sport_career_hitting.queryResults.row)
  }

  useEffect(()=> getPlayerDetails(), [])
 

    return (
        <>
        <div className="player-card">
            <h4 className="card-header">Career Stats</h4>
            <img className="player-img" src={logo}/>
            <h2 className="card-title">{props.location.state.name} #{props.location.state.number}</h2>
            <div className="handiness">
                <h4 style={{margin:0}}>Bats: {props.location.state.bats}</h4>
                <h4 style={{margin:0}}>Throws: {props.location.state.throws}</h4>
            </div>
            <div className="player-stats">
                <h4 className="stat1">Avg: {careerStats.avg}</h4>
                <h4 className="stat2">OPS: {careerStats.ops}</h4>
                <h4 className="stat3">RBI: {careerStats.rbi}</h4>
                <h4 className="stat4">HR: {careerStats.hr}</h4>
                <h4 className="stat5">SLG: {careerStats.slg}</h4>
                <h4 className="stat6">SB: {careerStats.sb}</h4>
            </div>
            <button onClick={() => props.addToFavorites(careerStats)}>
              Add to Favorites
            </button>
        </div>
        <button onClick={() => props.history.goBack()}>
        Go Back to Team Roster
        </button>
      </>
        
    )
}

export default PlayerCard