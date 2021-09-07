import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";



const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    },
    headerContainer: {
        textAlign: "center",
        margin: "2rem"
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        textAlign: "center",
        alignItems: "space-evenly",
        padding: "2rem"
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
    }
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
        <Grid container direction="column" item justifyContent="center" alignItems="space-around" className={classes.card} onDragStart={handleDragStart} >
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



const Carousel = (props) => {

    return <Grid >
        <AliceCarousel mouseTracking {...props} autoHeight infinite autoPlay />
    </Grid>
}

export default function ClientMessage({ state: clientMessage }) {
    const items = clientMessage.cardsData.map(props => <Card {...props} />);
    const classes = useStyles();
    return <Grid container className={classes.root} style={{ backgroundImage: `url(${clientMessage.backgroundImage})` }}>
        <Grid item>
            <Container maxWidth="md">
                <Header content={clientMessage.header} />
                <Carousel items={items} />
            </Container>
        </Grid>
    </Grid>


}