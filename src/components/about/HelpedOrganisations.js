import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Fab, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "4rem",
        flexGrow: 1,
        backgroundColor: "#3567D6",
        backgroundPosition: "30% 70%",
        backgroundRepeat: "no-repeat",
        color: "#fff",

    },
    text: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        color: "#05152E"
    },
    headingWithText: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        padding: "3rem 0",
        textAlign: "center",
    },
    button: {
        fontWeight: "bolder",
        padding: "1.5rem 3rem",
        backgroundColor: "#3CD0FF",
        fontSize: "larger",
        textOverflow: "ellipsis"

    }
}));



export default function HelpedOrganisations({ state: helpedOrganisations }) {
    const classes = useStyles();
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root} style={
            { backgroundImage: `url(${helpedOrganisations.backgroundImage})` }}>


            <HeadingWithText content={helpedOrganisations.content}></HeadingWithText>
            <Fab variant="extended" aria-label="add" className={classes.button}>
                {helpedOrganisations.buttonText}
            </Fab>
        </Grid>)
}

const HeadingWithText = ({ content }) => {
    const classes = useStyles();

    return <Grid container item className={classes.headingWithText} justifyContent="center" alignItems="center">
        <Grid item className={classes.heading}>
            <Typography
                variant="h3" gutterBottom style={{
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                    fontWeight: "700"
                }}>
                {content.heading}
            </Typography>
        </Grid>
        <Grid item md={8} className={classes.description}>
            <Typography
                variant="h6"
                style={{ color: "#fff" }}>
                {content.description}
            </Typography>
        </Grid>
    </Grid>

}