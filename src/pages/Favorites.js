import React from "react"
import PlayerCard from "./PlayerCard"

const Favorites = (props) => {
    return <div>
         {props.favorites.map((member) => <PlayerCard favorites={member} key={member.id} handleClick={props.remove} label="remove from team"/>)}
    </div>
}

export default Favorites