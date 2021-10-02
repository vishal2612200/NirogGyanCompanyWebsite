import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import TeamCardsList from "../utils/TeamCardsList";


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        // paddingBottom: theme.spacing(4),
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
        },
        paddingBottom: "1rem"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}

));




export default function ProductConsultant({ state: productConsultant }) {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <HeadingWithText content={productConsultant.header}></HeadingWithText>
            <Grid container item  >
                <TeamCardsList content={productConsultant.cardsList} />
            </Grid>
        </Grid>);

}



