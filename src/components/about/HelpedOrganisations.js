import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HeadingWithText from "../utils/HeadingWithText";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#3567D6",
        backgroundPosition: "20% 80%",
        backgroundRepeat: "no-repeat",
    }
}));



export default function HelpedOrganisations({ state: helpedOrganisations }) {
    const classes = useStyles();
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root} style={
            { backgroundImage: `url(${helpedOrganisations.backgroundImage})` }}>
            <HeadingWithText content={helpedOrganisations.content} ></HeadingWithText>
            <Button variant="contained" style={{ backgroundColor: "#3CD0FF", color: "#fff" }}>
                {helpedOrganisations.buttonText}
            </Button>
        </Grid>);
}

