import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import CardsListSimple from "../utils/CardsListSimple";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    }
}));



export default function ProductConsultant({ state: productConsultant }) {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid item conatiner>
                <HeadingWithText content={productConsultant.header}></HeadingWithText>
            </Grid>
            <Grid item container>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <CardsListSimple cardsList={productConsultant.cardsList}></CardsListSimple>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </Grid>);
}

