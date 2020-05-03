import React from "react"
import { Link } from "react-router-dom"

function End(props){
    return (
        <div>
            Thanks for playing?
            Your score is : {props.playerScore}
            <Link to="/"><button>Retry</button></Link>
        </div>
    )
}

export default End