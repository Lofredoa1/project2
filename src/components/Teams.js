import React from "react"
import { Link } from "react-router-dom"

const Teams = (props)=> {

    return (
        <div className="team-list">
           {props.activeTeams.map((team, index) => {
            return (
                <Link to={{
                    pathname: `/team-rosters/${team.team_id}`,
                    state: team.team_id}} key={team.team_id} myKey={team.team_id} >
                    <l1 className="team-name">{team.name_display_full}</l1><br />
                </Link>
            );
          })}
        </div>
    )
}

export default Teams