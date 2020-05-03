import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from "./components/Start"
import Quiz from "./components/Quiz"
import Error from "./components/Error"
import End from './components/End'

function App() {
	
	const [ score,setScore ] = useState(0)
	const [ category,setCategory ] = useState("")

	const updateScore = (newScore) => {
		setScore(newScore)	
	}

	const updateCategory = (event) => {
		setCategory(event.target.value)
	}

	return (
		<Switch>
			<Route path="/" render={() => <Start HandleChange={updateCategory}/>} exact/>
			<Route path="/quiz" render={() => <Quiz category={category} submitScore={updateScore}/>} />
			<Route path="/finish" render={() => <End playerScore={score}/>} />
			<Route component={Error} />
		</Switch>
	)
}

export default App
