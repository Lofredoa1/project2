import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../App.css"

const TeamRoster = (props) => {
    const [roster, setRoster] = useState([])
    const storedID = props.location.state.teamid;

    //API call to get the active roster
    const getActiveRoster = async () => {
        const url = `http://lookup-service-prod.mlb.com/json/named.roster_team_alltime.bam?start_season='${props.year}'&end_season='${props.year}'&team_id='${storedID}'`
        const response = await fetch(url)
        const data = await response.json()
        setRoster(data.roster_team_alltime.queryResults.row)
      }

      useEffect(()=> getActiveRoster(), [])



    return <div className="roster-background">
        <button onClick={() => props.history.goBack()}>
        Return to Teams
        </button>
        <h2 className="roster-title">Active Roster for the {props.year} season.</h2>
        <div className="roster-scroll">
        
        {roster.map((player, index) => {
            return ( 
                <Link to={{
                    pathname: `/player-card/${player.player_id}`,
                    state: {
                        playerid: player.player_id,
                        name: player.name_first_last,
                        number: player.jersey_number,
                        position: player.primary_position,
                        bats: player.bats,
                        throws: player.throws}}}
                        key={player.player_id} >
                    <div className="individual-player">
                        <h1 className="player-name">{player.name_first_last} #{player.jersey_number}</h1>
                        <div className="initial-stats">
                            <h3 className="local-stat">Position: {player.primary_position}</h3>
                            <h3 className="local-stat">Bats: {player.bats}</h3>
                            <h3 className="local-stat">Throws: {player.throws}</h3>
                        </div>
                    </div>
                </Link>
            );
          })}
        </div>
    </div>

}

export default TeamRoster