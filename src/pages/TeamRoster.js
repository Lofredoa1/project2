import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const TeamRoster = (props) => {
    const [roster, setRoster] = useState([])
    const storedID = props.location.state;
    console.log("my teams ID is:", storedID)

    //API call to get the active roster
    const getActiveRoster = async () => {
        const url = `http://lookup-service-prod.mlb.com/json/named.roster_team_alltime.bam?start_season='${props.year}'&end_season='${props.year}'&team_id='${storedID}'`
        const response = await fetch(url)
        const data = await response.json()
        setRoster(data.roster_team_alltime.queryResults.row)

        console.log("the players are:", roster)
      }

      useEffect(()=> getActiveRoster(), [])

     

      console.log("check me:", roster)


    return <div>
        
        {roster.map((player, index) => {
            return ( 
                <Link to={{
                    pathname: `/player-card/${player.player_id}`,
                    state: player.player_id}} key={player.player_id} myKey={player.player_id} >
                    <h1>{player.name_first_last} : {player.player_id}</h1>
                </Link>
            );
          })}
    </div>

}

export default TeamRoster