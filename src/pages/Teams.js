import React from "react"

const Teams = (props)=> {
    {props.activeTeams.map((team, team_id))}
    return <div>
       <h2>{team</h2>
    </div>



   

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
   
}

export default Teams