import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const useStyles=makeStyles((theme)=>({
	root:{
		flexGrow:1,
	},

	appBar:{

	},

	toolbarTitle:{
		flexGrow:1,
		textDecoration: 'none'
	},
	styleLink : {
		color: "inherit",
		 textDecoration: "none",

    
	}

}));

const Header= ()=>{

	const classes = useStyles();
	return (

		<>
			<div className={classes.root}>
				<AppBar
					position="static"
					color="default"
					elavstion={0}
					className={classes.appBar}
				>

					<Toolbar>
						<Typography
						
						variant="h5"
						color="inherit"
						className={classes.toolbarTitle}
						>

						<Link className={classes.styleLink}  to="/">
							CS Fundamentals Quiz
						</Link>	
						</Typography>
					</Toolbar>

				</AppBar>
			</div>
		</>
		);
}

export default Header;