import React, {useState,useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import ConnectApi from '../Api/ConnectApi';

import Header from "./Framework/Header";
import Footer  from "./Framework/Footer";


import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Alert,AlertTitle} from '@material-ui/lab';

const useStyles = makeStyles((theme)=>({
	paper: {

		marginTop: theme.spacing(10),
		display: "flex",
		flexDirection: "column",
	},

	form: {
		width: "100%",
		margininTop: theme.spacing(1),
	},

	submit: {
		margin: theme.spacing(2,0,2),
	},

	correct: {
		color: "blue",
	},

}));

const RandomQuiz = ()=>{

	const classes = useStyles();

	const {topic} = useParams();
	//console.log(topic);

	// const API_URL = "http://127.0.0.1:8000/quiz/api/r/" + topic;
	const API_URL = "https://csf-quiz.herokuapp.com/quiz/api/r/" + topic; 

	const [dataState] = ConnectApi(API_URL);

	console.log(dataState,"dataState");
	const [answer,setAnswer]=useState({});

	const ans = dataState.data.flatMap((q)=> q.answer);
	console.log(ans,"ans");


	const [answerCheck,setAnswerCheck] = useState();

	useEffect(()=>{
		if(Object.keys(answer).length===0) {
			setAnswer(createInitialAnswer());
		}
	}, [answer]);

	console.log(answer);

	
	const handleSelection = (e)=>{
		setAnswer({...answer,[e.target.value]:e.target.checked});
	}
	
	const createInitialAnswer=()=>{
		let z = ans.flatMap((obj)=>obj.id);
		var falseInitAnsObj = {};

		for(var x=0;x<ans.length;x++) {
			falseInitAnsObj[z[x]]=false;
		}
		return falseInitAnsObj;
	};

	
	const checkAnswer = (e)=>{
		e.preventDefault();

		let n=ans.map((obj)=>obj.is_right);
		let y = {...n};

		console.log(y,"actualAns answer");
		console.log(answer,"user answer");

		function  arrayEquals(usrAns,actualAns) {

			return (
				Array.isArray(usrAns) &&
				Array.isArray(actualAns) &&
				usrAns.length===actualAns.length &&
				actualAns.every((val,index)=>val===usrAns[index])
				);
		}

		let actualAns = Object.values(y);
		let usrAns= Object.values(answer);
		if(arrayEquals(usrAns,actualAns))
		{
			setAnswerCheck(true);
		}
		else
		{
			setAnswerCheck(false);
		}
		
	}

	function refreshPage() {
		window.location.reload(false);
	}


	function Result() {
		if(answerCheck===true) {
			return(
				<Alert severity ="success">
					<AlertTitle> Correct Answer </AlertTitle>
					Well Done you got it right.
					<Link href="#" variant="body2" onClick={refreshPage}>
					 {"Next Question"}
					</Link>
				</Alert>	 

				)
		}
		else if(answerCheck===false) {
			return(
				<Alert severity ="error">
					<AlertTitle> Wrong Answer </AlertTitle>
					Please Try Again
				</Alert>	

			)
		}
		else {
			return (
			<> </>
			)
		}

	}


	return (
		<>
			<Header/>

			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>

					{dataState.data.map(({title, answer},i)=>(

						<div key={i}>
							<Typography component="h1" variant="h5">
							{title}
							</Typography>

							{answer.map(({answer_text,id})=>(

							<RadioGroup>
         					
         						<FormControlLabel 
         						  control={
         						  	<Checkbox
         						  		value={id}
         						  		color="primary"
         						  		onChange={handleSelection}
         						  	/>	
         						  }
         						  label={answer_text}
         						/>

							</RadioGroup>

							))}


						</div>	

						))}

						<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={checkAnswer}
						>
						Submit Answer

						</Button>

						<Result/>

				</div>

			</Container>
			
			<Footer/>
			
		</>
		)
}

export default RandomQuiz;