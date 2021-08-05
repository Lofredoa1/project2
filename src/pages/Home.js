import React from "react"
import Form from "../components/Form"
import Teams from "../components/Teams"
import "../App.css"

const Home = (props)=> {
    
    return (
        <>
        <div className="main-area">
            <div className="search-area">
                <h3 className="home-blurb">Explore the history of the MLB to find your favorite player's career stats.</h3>
                <h2 className="home-title">Select a Year from 1876 - 2021</h2>
                <Form handleSubmit={props.handleSubmit} activeTeams={props.activeTeams} />
                <h3 className="display-year">The Current Active MLB teams for year <span>{props.year}</span></h3>
                <h4 className="display-amount">The amount of active MLB teams: <span>{props.activeTeams.length}</span></h4>
            </div>
        </div>
        <div className="list-background">
                {props.activeTeams.length > 1 ? <Teams activeTeams={props.activeTeams}/> : null}
        </div>
        </>
    )
}

export default Home