import React from "react"
import Form from "../components/Form"
import Teams from "../components/Teams"
import "../index.css"

const Home = (props)=> {
    
    return (
        <>
            <h2>Select a Year from 1950 - 2021</h2>
            <Form handleSubmit={props.handleSubmit} activeTeams={props.activeTeams} />
            <h4 className="display-year">The Current Active MLB Rosters for {props.year}</h4>
            {props.activeTeams.length > 1 ? <Teams activeTeams={props.activeTeams}/> : null}
        </>
    )
}

export default Home