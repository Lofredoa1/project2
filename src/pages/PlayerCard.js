import React, { useState, useEffect } from "react"
import logohitter from "../img/baseball-player-img.jpeg"
import "../App.css"

const PlayerCard = (props) => {
    const [careerStats, setCareerStats] = useState([])
    const playerID = props.favorites.length > 0 ? props.favorites.playerid : props.match.params.playerid; 


//API call to get the active roster
    const getPlayerDetails = async () => {
        if (props.location.state.position === "P"){
            const url = `https://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='${playerID}'`
            const response = await fetch(url)
            const data = await response.json()
            setCareerStats(data.sport_career_pitching.queryResults.row)
        } else {
            const url = `https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${playerID}'`
            const response = await fetch(url)
            const data = await response.json()
            setCareerStats(data.sport_career_hitting.queryResults.row)
        }
    }

  useEffect(()=> getPlayerDetails(), [])
 
    const pitcher = () => {
        return (

        <div className="card-background">
            <div className="player-card">
                <h4 className="card-header">Career Stats</h4>
                <img className="player-img" src={logohitter}/>
                <h2 className="card-title">{props.location.state.name} #{props.location.state.number}</h2>
                <div className="handiness">
                    <h4 style={{margin:0}}>Position: {props.location.state.position}</h4>
                    <h4 style={{margin:0}}>Bats: {props.location.state.bats}</h4>
                    <h4 style={{margin:0}}>Throws: {props.location.state.throws}</h4>
                </div>
                <div className="player-stats">
                    <h4 className="stat1">IP: {careerStats.ip}</h4>
                    <h4 className="stat2">ERA: {careerStats.era}</h4>
                    <h4 className="stat3">WHIP: {careerStats.whip}</h4>
                    <h4 className="stat4">Strikeouts: {careerStats.so}</h4>
                    <h4 className="stat5">Opp Avg: {careerStats.avg}</h4>
                    <h4 className="stat6">Saves: {careerStats.sv}</h4>
                </div>
                <button onClick={() => props.addToFavorites(careerStats)}>
                Add to Favorites
                </button>
            </div>
            <button className="card-button" onClick={() => props.history.goBack()}>
            Go Back to Team Roster
            </button>
        </div>
        )
    }

    const hitter = () => {
        return (
            <div className="card-background">
            <div className="player-card">
                <h4 className="card-header">Career Stats</h4>
                <img className="player-img" src={logohitter}/>
                <h2 className="card-title">{props.location.state.name} #{props.location.state.number}</h2>
                <div className="handiness">
                    <h4 style={{margin:0}}>Position: {props.location.state.position}</h4>
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
            <button className="card-button" onClick={() => props.history.goBack()}>
            Go Back to Team Roster
            </button>
        </div>
        )
    }

    return props.location.state.position === "P" ? pitcher () : hitter()
}

export default PlayerCard