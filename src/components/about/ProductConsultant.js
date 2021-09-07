import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeadingWithText from "../utils/HeadingWithText";
import CardsList from "../utils/CardsList";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));



export default function ProductConsultant({ state: productConsultant }) {
    const classes = useStyles();
    return (
        <Grid container direction="column" >
            <HeadingWithText content={productConsultant.content}></HeadingWithText>
            <CardsList cardsList={productConsultant.cardsList}></CardsList>
        </Grid>);
}

