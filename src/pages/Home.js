import React from "react"
import Form from "../components/Form"
import Teams from "../components/Teams"

const Home = (props)=> {

//Function to get the teams for a specific season
//     const handleSubmit = async (searchYear) => {
//         console.log("this is the search year", searchYear)
//         setYear(searchYear)
//         const url = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${searchYear}'`
//         const response = await fetch(url)
//         const data = await response.json()
//         setActiveTeams(data.team_all_season.queryResults.row)
//   }
    
    return (
        <>
            <h2>Select a Year from 1950 - 2021</h2>
            <Form handleSubmit={props.handleSubmit} activeTeams={props.activeTeams} />
            <h4>The Current Active MLB Rosters for the Selected Year</h4>
            {props.activeTeams.length > 1 ? <Teams activeTeams={props.activeTeams}/> : null}
        </>
    )
}

export default Home