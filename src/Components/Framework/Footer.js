import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">

      ⭐ {' '}
      <Link color="inherit" href="https://material-ui.com/">
         This project
      </Link>
       <br/> <br/>
      {'Copyright © '}
      <Link color="inherit" href="https://akdas.me/">
        Akdas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(4),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      color: "#fff",

  }

}));




const Footer = ()=>  {
  const classes = useStyles();

    return (
        <>

        <Container maxWidth="md" component="footer" className={classes.footer}>
                             
      

        <Box mt={3}>
          <Copyright />
        </Box>

        </Container>

        </>
    );
}

export default Footer;
