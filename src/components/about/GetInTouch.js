import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        background: "#3567D6",
        padding: "3rem",
        "&> *": {
            padding: "2rem"
        },
    }
    , block2: {
        flexGrow: 1,
        textAlign: "left",
        color: "#fff",
    },
    image: {
        maxWidth: "100%",
        maxHeight: "auto"
    },

}));







const Block = ({ content }) => {
    const classes = useStyles()
    return <Grid container item md={4} className={classes.block} alignItems="center" justifyContent="center">
        <Grid item>
            <img src={content.imagePath} className={classes.image} alt="" />
        </Grid>
    </Grid>

}

const Block2 = ({ content }) => {
    const classes = useStyles()
    return <Grid container item className={classes.block2} direction="column" alignItems="center" justifyContent="space-evenly" md={4}>
        <Grid item>
            <Typography variant="h4" >
                {content.line1}
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" >
                {content.line2}
            </Typography>
        </Grid>

        <Grid item>
            <Typography variant="h6" className={classes.block2}>
                {content.line3}
            </Typography>
        </Grid>

    </Grid>

}


export default function GetInTouch({ state: mailingList }) {
    const classes = useStyles();
    return <Grid container justifyContent="space-evenly" alignItems="stretch" className={classes.root}>
        <Block content={mailingList.block1} />
        <Block2 content={mailingList.block2} />
        <Block content={mailingList.block3} padding />
    </Grid>

}