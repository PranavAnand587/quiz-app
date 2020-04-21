import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from "./components/Start"
import Quiz from "./components/Quiz"
import Error from "./components/Error"

function App() {
	return (
		<Switch>
			<Route path="/" component={Start} exact/>
			<Route path="/quiz" component={Quiz} />
			<Route component={Error} />
		</Switch>
	)
}

export default App
