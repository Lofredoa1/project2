import React from "react"
import { Link } from "react-router-dom"

const Teams = (props)=> {

    return (
        <div>
           {props.activeTeams.map((team, index) => {
            return (
                <Link to={{
                    pathname: `/team-rosters/${team.team_id}`,
                    state: team.team_id}} key={team.team_id} myKey={team.team_id} >
                    <h2>{team.name_display_full}</h2>
                </Link>
            );
          })}
        </div>
    )
}

export default Teams