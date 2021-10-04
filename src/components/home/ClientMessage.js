import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import HeadingWithText from "../utils/HeadingWithText"
import CarousalWithArrowsOnDesktop from "../utils/CarousalWithArrowsOnDesktop"

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        paddingBottom: theme.spacing(4),
        backgroundAttachment: "fixed"
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
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        width: "90%",
        marginTop: "3%",
        marginLeft: "3%",
        marginBottom: "5%"
    },
    message: {
        fontSize: "1rem",
        "&::before": {
            content: "open-quote",
            fontSize: "4rem",
            lineHeight: 0,
            verticalAlign: "bottom",

        },
        "&::after": {
            content: "close-quote",
            paddingTop: "1rem",
            fontSize: "3rem",
            lineHeight: 0,
            verticalAlign: "bottom",
            display: "inline-block",
            transform: "translateY(20px)",
        },
        paddingBottom: "1rem"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    clientImage: {
        height: "100px",
        width: "100px",
        padding: "4px",
        borderRadius: "50%",
        border: "1px dashed grey"
    }
}

));





export default function ClientMessage({ state: clientMessage }) {

    const classes = useStyles();
    return <Grid container className={classes.root} style={{ backgroundImage: `url(${clientMessage.backgroundImage})`, padding: "2rem" }} >
        <HeadingWithText content={clientMessage.header} />

        <Grid container item md={8} style={{ marginTop: "1.25rem" }}>
            <CardsList content={clientMessage.cardsList} ></CardsList>
        </Grid>
        <Grid item></Grid>
    </Grid>
}


const CardsList = ({ content }) => {
    const classes = useStyles();
    return <Grid container className={classes.cardsList} item justifyContent="center" alignItems="center">
        <CarousalWithArrowsOnDesktop card={<Card />} content={content} dotsOnDeskTop={true}></CarousalWithArrowsOnDesktop>
    </Grid>
}


const Card = ({ message, image: { imagePath, altText = "logo-default" }, name, organisation, }) => {
    const classes = useStyles();
    return (<Grid container item justifyContent="space-around" alignItems="center" className={classes.card} >
        <Grid item>
            <Typography variant="h6" color="textSecondary" className={classes.message}>
                <i>{message}</i>
            </Typography>

        </Grid>

        <Grid item style={{ marginTop: "5%" }}>
            <img loading="lazy" src={imagePath} alt={altText} className={classes.clientImage} />
            <Typography color="textPrimary" variant="h5">
                {name}
            </Typography>
            <Typography color="textSecondary" variant="h6">
                {organisation}
            </Typography>
        </Grid>
    </Grid>
    )
}
