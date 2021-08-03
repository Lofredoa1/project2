import React from "react"
import Form from "../components/Form"
import Teams from "../components/Teams"
import "../App.css"

const Home = (props)=> {
    
    return (
        <>
            <h2 className="home-title">Select a Year from 1876 - 2021</h2>
            <Form handleSubmit={props.handleSubmit} activeTeams={props.activeTeams} />
            <h3 className="display-year">The Current Active MLB Rosters for {props.year}</h3>
            <h4 className="display-amount">The amount of active MLB teams: {props.activeTeams.length}</h4>
            <div className="list-background">{props.activeTeams.length > 1 ? <Teams activeTeams={props.activeTeams}/> : null}</div>
        </>
    )
}

export default Home