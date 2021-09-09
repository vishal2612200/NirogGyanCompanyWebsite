import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    },
    headerContainer: {
        textAlign: "center",
        
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "15px",
        textAlign: "center",
        alignItems: "space-evenly",
        padding: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
        width:"90%",
       
        marginTop: "3%",
        marginLeft:"3%",
        marginBottom: "5%"
    },
    message: {
        fontSize: "1rem",
        "&::before": {
            content: "open-quote",
            fontSize: "4rem"
        },
        "&::after": {
            content: "close-quote",
            fontSize: "4rem",
            transform: "translate(10px, 10px)"
        },
        paddingBottom: "1rem"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },    
}

));




const handleDragStart = (e) => e.preventDefault();


const Header = ({ content }) => {
    const classes = useStyles();
    return <Grid item className={classes.headerContainer}>
        <Typography
            variant="h3"
            className={classes.heading}>
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}>
            {content.description}
        </Typography>
    </Grid>

}




const Card = ({ message, imagePath, name, organisation }) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center"  className={classes.card} onDragStart={handleDragStart} >
            <Grid item>
                <Typography variant="h6" color="textSecondary" className={classes.message}>
                    <i>{message}</i>
                </Typography>

            </Grid>
            <Grid item >
                <img src={imagePath} alt="client" />
            </Grid>
            <Grid item>
                <Typography variant="h4" color="textPrimary">
                    {name}
                </Typography>

            </Grid>
            <Grid item >
                <Typography variant="h6" color="textSecondary">
                    {organisation}
                </Typography>
            </Grid>
        </Grid>
    )
}


export default function ClientMessage({ state: clientMessage }) {
    const items = clientMessage.cardsData.map(props => <Card {...props} />);

    const classes = useStyles();
    return <Grid container className={classes.root} style={{ backgroundImage: `url(${clientMessage.backgroundImage})` }}>
        <Grid item md={10} style={{ marginTop:"3%"}}>
            <Header content={clientMessage.header} />
        </Grid>
        
            
        <Grid item sm={8} md={8}>

        <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={false}>
        <Grid  justifyContent="center"  className={classes.card} >
            <Grid item>
                <Typography variant="h6" color="textSecondary" className={classes.message}>
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada,
                         et viverra ex ultrices. Aliquam quis sodales massa, 
                        ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.</i>
                </Typography>

            </Grid>
            
            <Grid item>
                <img src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
                  alt="client" style={{height:"150px", width:"150px", borderRadius: "50%", border:"1px dashed grey" }} />
            
                <Typography variant="h5">
                    <Box fontWeight="fontWeightBold" m={1}>
                        Vishal Sharma
                    </Box>
                    <Box color="textSecondary" m={1}>
                        Niroggyan
                    </Box>
                </Typography>
            </Grid>
        </Grid>
        <Grid  justifyContent="center"  className={classes.card} >
            <Grid item>
                <Typography variant="h6" color="textSecondary" className={classes.message}>
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada,
                         et viverra ex ultrices. Aliquam quis sodales massa, 
                        ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.</i>
                </Typography>

            </Grid>
            
            <Grid item>
                <img src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
                  alt="client" style={{height:"150px", width:"150px", borderRadius: "50%" }} />
                <Typography variant="h5">
                    <Box fontWeight="fontWeightBold" m={1}>
                        Vishal Sharma
                    </Box>
                    <Box color="textSecondary" m={1}>
                        Niroggyan
                    </Box>
                </Typography>
            </Grid>
        </Grid>
        </Carousel>
        </Grid>
        <Grid item></Grid>      
    </Grid>
}