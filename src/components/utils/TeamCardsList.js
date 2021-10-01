import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Typography, IconButton, Card, CardActionArea, CardActions, CardContent, Box } from "@material-ui/core";
import CarousalWithArrowsOnDesktop from "./CarousalWithArrowsOnDesktop"
import { useNumberOfSlides } from "../cutomHooks"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "300px"

    },
    cardsList: {
        justifyContent: "center",
        alignItems: "stretch",
        textAlign: "center",
    },
    card: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        justifyContent: "space-evenly",
        margin: "2%",
        alignContent: "center",
        border: "1px solid #B8BBBD",
        textAlign: "center",
        borderRadius: "10px",
    },

    iconStyle: {
        border: "1px solid #B8BBBD",
        borderRadius: "50%",
        padding: "5px",

    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.8rem",

        }
    }

}));



export default function TeamCardsList({ content }) {
    const classes = useStyles();
    const numberOfSlides = useNumberOfSlides();

    return <Grid container className={classes.cardsList} item justifyContent="center" alignItems="space-around" >
        <CarousalWithArrowsOnDesktop card={<TeamCard />} content={content} dotsOnDeskTop={true} numberOfSlides={numberOfSlides}/>
    </Grid>
}


const TeamCard = ({ image:{ imagePath, altText}, heading, content }) => {

    const classes = useStyles();
    const icons = [
        <FacebookIcon className={classes.iconStyle} />,
        <InstagramIcon className={classes.iconStyle} />,
        <TwitterIcon className={classes.iconStyle} />]
    return (
        <Card className={classes.root} >
            <CardActionArea style={{ textAlign: "center" }}>
                <img src={imagePath} alt={altText} width="100%" height="200px" />
                <CardContent >
                    <Typography variant="h4" color="textSecondary" className={classes.title}>
                        <Box textAlign="center">
                            {heading}
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        <Box textAlign="center">
                            {content}
                        </Box>
                    </Typography>
                    <Typography variant="h5">

                    </Typography>


                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
                <Box >
                    {icons.map(icon => (<IconButton>{icon}</IconButton>))}
                </Box>

            </CardActions>
        </Card>
    );
}


