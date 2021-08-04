import React, { useState, useEffect } from "react"

const PlayerCard = (props) => {
    const [careerStats, setCareerStats] = useState([])
    const playerID = props.location.state; 
console.log("test", props.location.state)
//API call to get the active roster
const getPlayerDetails = async () => {
    const url = `http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${playerID}'`
    const response = await fetch(url)
    const data = await response.json()
    console.log("heres the data" ,data.sport_career_hitting.queryResults.row)
    
    setCareerStats(data.sport_career_hitting.queryResults.row)

  }

  useEffect(()=> getPlayerDetails(), [])
 

    return <div>
            <h1>{careerStats.player}</h1>
            <h4>Avg: {careerStats.avg}</h4>
            <h4>OPS: {careerStats.ops}</h4>
            <h4>HR: {careerStats.hr}</h4>
            <h4>RBI: {careerStats.rbi}</h4>
            <h4>SB: {careerStats.sb}</h4>
        </div>
}

export default PlayerCard