import React from "react"
import TeamRoster from "./TeamRoster";

const Teams = (props)=> {
    return (<h1>Teams</h1>)
}


    //     <div>
    //       {props.activeTeams.map((team, index) => {
    //           const {name_display_full, team_id} = team
    //           let newId = team.name_id
    //           console.log(team)
    //         return (
                
    //             // <TeamRoster team_id={newId} />
    //             <h1>{team.name_display_long} : {team.team_id}</h1>
              
    //         );
    //       })}
    //     </div>
    //   );
    // }
    



   

    // const loaded = () => {
    //     let allTeams = []
    //     let newArr = []
    //     return <div>
    //     {activeTeams.map((team, team_id, index) => {
            
    //         // let teamId = [team.team_id];
            
    //         // allTeams.push(teamId)
    //         newArr = [...newArr, team.team_id] 
    //         console.log("Team_ID", team.team_id)
    //         console.log("here are the team ids", newArr)
    //         return (
    //             <li team_id={"yellow"}>{team.name_display_full}</li>
    //         )
    //     })}
    // </div>
    // }

    // const loading = () => {
    //     return <h1>Loading...</h1>
    // }

    // return activeTeams ? loaded () : loading ()
   

export default Teams