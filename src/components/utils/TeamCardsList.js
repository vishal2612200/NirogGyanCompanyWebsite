import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CarousalWithArrowsOnDesktop from "./CarousalWithArrowsOnDesktop"
import { useNumberOfSlides } from "../customHooks"
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "97%",
        marginBottom: "0.5rem",
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
        fontSize: "1.75rem",
        fontWeight: "700",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.8rem",

        }
    }

}));



export default function TeamCardsList({ content }) {
    const classes = useStyles();
    const numberOfSlides = useNumberOfSlides();

    return <Grid container className={classes.cardsList} item justifyContent="center" alignItems="space-around" >
        <CarousalWithArrowsOnDesktop card={<TeamCard />} content={content} dotsOnDeskTop={true} numberOfSlides={numberOfSlides} />
    </Grid>
}


const TeamCard = ({ image: { imagePath, altText = "logo-default" }, heading, content, linkedin }) => {

    const classes = useStyles();
    const icons = [
        <LinkedinIcon className={classes.iconStyle} />]
    const absoluteurl = `\\${linkedin}`;

    return (
        <Card className={classes.root} >
            <CardActionArea style={{ textAlign: "center" }}>
                <img loading="lazy" src={imagePath} alt={altText} width="100%" height="200px" />
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
                        <Box >
                            {
                                icons.map(icon => (
                                    <IconButton
                                        component={Link}
                                        to={absoluteurl}
                                        rel="noreferrer"
                                        target="_blank">
                                        {icon}
                                    </IconButton>
                                )
                                )
                            }
                        </Box>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


