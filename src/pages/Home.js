import React, { useState, useEffect } from "react"
import Form from "../components/Form"
import Teams from "../components/Teams"

const Home = (props)=> {

//State to hold the data of the form 
//const [year, setYear] = useState({})
const [activeTeams, setActiveTeams] = useState([]) //uses the input year to get all of the teams for that specific year   

//Function to get the teams for a specified season
const handleSubmit = async (searchYear) => {
    console.log("this is the search year", searchYear)
    const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${searchYear}'`
    const response = await fetch(url)
    const data = await response.json()
    setActiveTeams(data.team_all_season.queryResults.row)
  }
  
  //useEffect(()=> {getTeamsBySeason()}, [])



    return (
        <>
            <h2>Select a year</h2>
            <Form handleSubmit={handleSubmit}/>
            {activeTeams ? <Teams activeTeams={activeTeams}/> : null}


        </>
    )
    // include the buttons to select a year to browse stats
}

export default Home