import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeadingWithText from "../utils/HeadingWithText"

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        paddingBottom: theme.spacing(4),
    },
    headerContainer: {
        textAlign: "center",

    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "15px",
        textAlign: "center",
        alignItems: "center",
        padding: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
        width: "90%",

        marginTop: "3%",
        marginLeft: "3%",
        marginBottom: "5%"
    },
    message: {
        fontSize: "1rem",
        "&::before": {
            content: "open-quote",
            fontSize: "2rem",
            lineHeight: 0,
            verticalAlign: "middle",

        },
        "&::after": {
            content: "close-quote",
            fontSize: "2rem",
            lineHeight: 0,
            verticalAlign: "middle",
        },
        paddingBottom: "1rem"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}

));





export default function ClientMessage({ state: clientMessage }) {

    const classes = useStyles();
    return <Grid container className={classes.root} style={{ backgroundImage: `url(${clientMessage.backgroundImage})`, paddingTop: "2rem" }} >
        <HeadingWithText content={clientMessage.header} />

        <Grid container item md={8} style={{ marginTop: "-3rem" }}>

            <CardsList content={clientMessage.cardsList} ></CardsList>
        </Grid>
        <Grid item></Grid>
    </Grid>
}


const CardsList = ({ content }) => {
    return <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={false}>

        {content.map((props, index) => (<Card {...props} key={index} />))}
    </Carousel>


}


const Card = ({ message, imagePath, name, organisation, }) => {
    const classes = useStyles();
    return (<Grid container item justifyContent="space-around" alignItems="center" className={classes.card} >
        <Grid item>
            <Typography variant="h6" color="textSecondary" className={classes.message}>
                <i>{message}</i>
            </Typography>

        </Grid>

        <Grid item>
            <img src={imagePath} alt="client"
                style={{ height: "100px", width: "100px", padding: "4px", borderRadius: "50%", border: "1px dashed grey" }} />
            <Typography variant="h5">
                <Typography color="textPrimary" variant="h5">
                    {name}
                </Typography>
                <Typography color="textSecondary" variant="h6">
                    {organisation}
                </Typography>
            </Typography>
        </Grid>
    </Grid>
    )
}