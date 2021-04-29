import React from "react";
import QuizSelect from "./Components/QuizSelect";
import RandomQuiz from "./Components/RandomQuiz"

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


const App = ()=>{

	return (

		<Router>
			<Switch>
				<Route path="/csf-quiz" component={QuizSelect} exact />
				<Route path="/r/:topic" component={RandomQuiz} exact />
			</Switch>
		</Router>
		
		);
	
}

export default App;