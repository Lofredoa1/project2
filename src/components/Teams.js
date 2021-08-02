import React from "react"
import { Link } from "react-router-dom"

const Teams = (props)=> {

console.log("what is this?",props.activeTeams)
    return (
        <div>
           {props.activeTeams.map((team, index) => {
            //   const {name_display_full, team_id} = team
            return (
                <Link to={`/team-rosters`} team_id={team.team_id} >
                    <h2>{team.name_display_full}</h2>
                </Link>
            );
          })}
        </div>
    )
}

export default Teams