import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";



const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "space-evenly",
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    },
    headerContainer: {
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        textAlign: "center",
        margin:"0 auto"
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
        <Grid container direction="column" item justifyContent="center" className={classes.card} onDragStart={handleDragStart} >
            <Grid item>
                <Typography variant="h6" color="textSecondary">
                    <blockquote> {message}</blockquote>
                </Typography>

            </Grid>
            <Grid item >
                <img src={imagePath} alt="client" />
            </Grid>
            <Grid item>
                <Typography variant="h6" color="textSecondary">
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



const Carousal = (props) => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
    return <Grid >
        <AliceCarousel mouseTracking {...props} responsive={responsive} controlsStrategy="alternate" autoPlay infinite paddingLeft="5rem" paddingRight="5rem" />
    </Grid>
}

export default function ClientMessage({ state: clientMessage }) {
    const items = clientMessage.cardsData.map(props => <Card {...props} />);
    return <Grid container direction="column" justifyContent="center" alignItems="space-evenly" style={{ backgroundImage: `url(${clientMessage.backgroundImage})` }}>
        <Header content={clientMessage.header} />
        <Carousal items={items} />
    </Grid>


}