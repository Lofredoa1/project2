import React, { useState, useEffect } from "react"

const PlayerCard = (props) => {
    const [projections, setProjections] = useState([])
    const playerID = props.location.state; 
console.log("test", props.location.state)
//API call to get the active roster
const getPlayerDetails = async () => {
    const url = `http://lookup-service-prod.mlb.com/json/named.proj_pecota_batting.bam?season='${props.year}'&player_id='${playerID}'`
    const response = await fetch(url)
    const data = await response.json()
    console.log("heres the data" ,data.proj_pecota_batting.queryResults.row) 
    setProjections(data.proj_pecota_batting.queryResults.row)

  }

  useEffect(()=> getPlayerDetails(), [])


    return <div>
            <h1>{projections.player}</h1>
            <h4>Avg: {projections.avg}</h4>
            <h4>OPS: {projections.ops}</h4>
            <h4>HR: {projections.hr}</h4>
            <h4>RBI: {projections.rbi}</h4>
            <h4>SB: {projections.sb}</h4>
        </div>
}

export default PlayerCard