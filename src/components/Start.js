import React from "react"
import { Link } from "react-router-dom"

import "./Start.css"

const Start = props => {
    return (
        <div class="screen" id="start_menu">
			<h1>Quiz App</h1>
			<Link to="/quiz"><button>Let's Start</button></Link>
            <select id="categories" name="categories" onChange={e => props.HandleChange(e)}>
                <option value="">Any Category</option>  
                <option value="&category=9">General Knowledge</option>  
                <option value="&category=10">Books</option>  
                <option value="&category=11">Films</option>  
                <option value="&category=12">Music</option>  
                <option value="&category=13">Musicals & Theaters</option>  
                <option value="&category=14">Television</option>  
                <option value="&category=15">Video Games</option>  
                <option value="&category=16">Board Games</option>  
                <option value="&category=17">Science & Nature</option>  
                <option value="&category=18">Computer</option>  
                <option value="&category=19">Mathematics</option>  
                <option value="&category=20">Mythology</option>  
                <option value="&category=21">Sports</option>  
                <option value="&category=22">Geography</option>  
                <option value="&category=23">History</option>  
                <option value="&category=24">Politics</option>  
                <option value="&category=25">Art</option>  
                <option value="&category=26">Celebrities</option>  
                <option value="&category=27">Animals</option>  
                <option value="&category=28">Vehicles</option>  
                <option value="&category=29">Comics</option>  
                <option value="&category=30">Gadgets</option>  
                <option value="&category=31">Japanese Anime & Manga</option>  
                <option value="&category=32">Cartoons & Animations</option>  
            </select>
		</div>
    )
}

export default Start