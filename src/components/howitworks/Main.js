import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText";
import Divider from '@material-ui/core/Divider';

import clsx from 'clsx';
import "../component.css";
const useStyles = makeStyles((theme) => ({
  root: {
    
    padding: "2rem",
    textWrap: "word-break"
  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  card: {
  },
  evenCard: {
    flexDirection: "row"
  },
  oddCard: {

    flexDirection: "row-reverse"
  },
  textContainer: {
    borderLeft: "3px dashed #grey",

  }


})
);

export default function Main({ state: main }) {

  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="center" >
      <HeadingWithText content={main.header} />
      <Grid container item  justifyContent="space-evenly" md={10}>
        <Grid container item className={classes.evenCard}>
          <Grid item xs={5}>
            <img width="95%" src={main.cardsList[0].imagePath} style={{
              borderRadius: "50%",
              background: "red"
            }} alt="doctor" />
          </Grid>
          <Grid container item xs={7} >
          
          <Grid item container style={{marginTop:"15%"}} xs={8}>
            <Grid item>
              <Typography variant="h4" color="textPrimary">
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[0].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box m={1} style={{marginTop:"5%"}}>
                  {main.cardsList[0].description}
                </Box>
              </Typography>
              <Box m={1} style={{marginTop:"10%", marginLeft:"-10%"}}>
                <img width="100%" src={main.cardsList[0].linePath} alt="doctor" />
              </Box>
              </Grid>
              <Grid item container>
              <Grid item xs={11}>
              </Grid>
              <Grid item xs={1}>
              <img  src={main.cardsList[0].arrowPath} alt="doctor" />
              </Grid>
              </Grid>
            </Grid>
            
        </Grid>
      </Grid>
      <Grid container item className={classes.oddCard}>
          <Grid item xs={5}>
              <img width="95%" src={main.cardsList[1].imagePath} alt="doctor" />
          </Grid>
          <Grid container item xs={7} >
            <Grid item xs={3}></Grid>

            <Grid item style={{marginTop:"20%"}} xs={9}>
              <Typography variant="h4" color="textPrimary">
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[1].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box  m={1} style={{marginTop:"5%"}}>
                  {main.cardsList[1].description}
                </Box>
              </Typography>
              <Box m={1} style={{marginTop:"10%"}}>
               
              </Box>
            </Grid>
            <Grid item>
            <Box m={1} style={{marginTop:"10%"}}>
             
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item className={classes.evenCard}>
          <Grid item xs={5}>
              <img width="95%" src={main.cardsList[2].imagePath} alt="doctor" />
          </Grid>
          <Grid container item xs={7} >

            <Grid item  xs={8}>
              
              
              <Typography variant="h4" color="textPrimary" style={{marginTop:"15%"}}>
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[2].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box  m={1} style={{marginTop:"5%"}}>
                  {main.cardsList[2].description}
                </Box>
              </Typography>
              <Box m={1} style={{marginTop:"8%", marginRight:"-1%"}}>
                <img width="100%" src={main.cardsList[2].arrowPath} alt="doctor" />
              </Box>
              
            </Grid>
            <Grid item>
            <img width="90%" src={main.cardsList[2].linePath} alt="doctor" />
          </Grid>
         
        </Grid>
      </Grid>

      <Grid container item className={classes.oddCard}>
          <Grid item xs={5}>
              <img width="95%" src={main.cardsList[3].imagePath} alt="doctor" />
          </Grid>
          <Grid container item xs={7} alignContent="left">
            <Grid item container xs={3}>
              <Grid item md={11}></Grid>
              <Grid item md={1}>
                <img height="66%"  src={main.cardsList[3].linePath} alt="doctor" />
              </Grid>
            </Grid>

            <Grid item style={{marginTop:"15%"}} xs={9}>
          
              <Typography variant="h4" color="textPrimary">
                <Box fontWeight="fontWeightMedium" m={1}>
                  {main.cardsList[3].heading}
                </Box>
              </Typography>
              <Typography variant="paragraph" color="textSecondary" >
                <Box  m={1} style={{marginTop:"5%"}}>
                  {main.cardsList[3].description}
                </Box>
              </Typography>
              <Box m={1} style={{marginTop:"8%", marginLeft:"-2%"}}>
                <img width="100%" src={main.cardsList[3].arrowPath} alt="doctor" />
              </Box>
            
            
              
          
          </Grid>
        </Grid>
      </Grid>
        {/* <CardsList cardsList={main.cardsList}></CardsList> */}
    </Grid>
    </Grid>
  );
}


{/* 


const CardsList = ({ cardsList }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" >
    {
      cardsList.map(({ imagePath, heading, description }, index) => {
        return <Card {...{ imagePath, heading, description }} className={clsx(
          index % 2 === 0 ? classes.evenCard : classes.oddCard,
          classes.card)} />
      })
    }
  </Grid>
}



const Card = ({ imagePath, heading, description, ...props }) => {
  const classes = useStyles();

  return (
    <Grid container item {...props}>
      <Grid item xs={4}>
          <img width="95%" src={imagePath} alt="doctor" />
      </Grid>
      <Grid container item xs={4} >
        <Grid item style={{marginTop:"30%"}}>
          <Typography variant="h4" color="textPrimary">
            <Box fontWeight="fontWeightMedium" m={1}>
              {heading}
            </Box>
          </Typography>
          <Typography variant="paragraph" color="textSecondary" >
            <Box  m={1} style={{marginTop:"5%"}}>
              {description}
            </Box>
          </Typography>
          <Box m={1} style={{marginTop:"10%"}}>
            <Divider />
          </Box>
        </Grid>
        <Grid item>
        <Box m={1} style={{marginTop:"10%"}}>
          <Divider />
        </Box>
      </Grid>
      </Grid>
     <Grid  item xs={4}>
      <Grid item md={6}>
        <Box m={1} style={{marginTop:"10%"}}>
          <Divider />
        </Box>
      </Grid>

    </Grid> 
     
    </Grid>

  )
} 

*/}
