import React from "react"
import { Link } from "react-router-dom"

import "./Start.css"

function Start() {
    return (
        <div class="screen" id="start_menu">
			<h1>Covid Quiz</h1>
			<Link to="/quiz"><button>Let's Start</button></Link>
		</div>
    )
}

export default Start