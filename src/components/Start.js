import React from "react"
import { Link } from "react-router-dom"

function Start() {
    return (
        <div>
			<h1>Covid Quiz</h1>
			<Link to="/quiz"><button>Let's Start</button></Link>
		</div>
    )
}

export default Start