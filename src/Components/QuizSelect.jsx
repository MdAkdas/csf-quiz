import React from "react";
import {Link} from "react-router-dom";
import Header from "./Framework/Header";
import Footer  from "./Framework/Footer";
import useCollectData from "../Api/ConnectApi";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(5, 0, 1.5),
  },
  cardHeader: {
  	display: 'flex',
    justify: 'space-evenly',
    alignItems: 'center',

    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],

  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  cardHover: {
  	background: "#fff",
  	borderRadius: "10px",
  	transform: 'scale(1.03)',
  	boxShadow: "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
  	transition: "all ease 200ms",
  	'&:hover': {
       transform: "scale(1.03)",
  boxShadow: "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)"
    },
  }

}));


const QuizSelect=()=>{


	const classes = useStyles();

	// const API_URL = "http://127.0.0.1:8000/quiz/api/";
	const API_URL = "https://csf-quiz.herokuapp.com/quiz/api/"
	
	const [dataState] = useCollectData(API_URL);

	console.log("in quiz select")
	console.log(dataState);


	return (
		<> 

			<CssBaseline />

			<Header/>

			{/* Hero unit */}
		   
		    <Container maxWidth="sm" component="main" className={classes.heroContent}>

			    	
			        

		    </Container>

		    <Container maxWidth="md" component="main" >

		    	<Grid container spacing={5} alignItems="flex-end">


		    		{dataState.data.map((q)=>(

		    		<Grid item key={q.title} xs={12} md={4}>
			    		
			    		<Card className={classes.cardHover}>

			    			<CardHeader
			    			  title={q.title}
			    			  titleTypography={{align:"center"}}
			    			  subHeaderTypography={{align:"center"}}
			    			  className={classes.cardHeader} 
			    			/>
			    			
			    			<CardContent>

			    				

			    				<ul>
			    					<Typography
			    					  component="li"
			    					  variant="subtitle1"
			    					  align="center"
			    					>		
			    					{q.questionsCount} Questions
			    					</Typography>
			    				</ul>	
			    			</CardContent>

			    			<CardActions>

			    				

			    				<Button

			    					style={{
								        borderRadius: 15,
								        backgroundColor: "#21b6ae",
								       
								        fontSize: "15px"
								    }}

			    				  component={Link} to={"/csf-quiz/r/" + q.title}
			    				  fullWidth
			    				  variant="contained"
			    				  color="primary"
			    				  href="http://127.0.0.1:8000/quiz/api/r/OOPs"
			    				>
			    				
			    					Start Quiz
			    				</Button>


			    			</CardActions>

			    		</Card>

			    	</Grid>	

		    		))}

		    	</Grid>
		        

		 

		    </Container>

		    <Footer/>
			
		</>
		);
}

export default QuizSelect;