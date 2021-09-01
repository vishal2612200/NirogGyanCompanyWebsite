import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'; import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Box, IconButton, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import * as path from "path";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: "linear-gradient(to right, #3567D6, #13DED2)",
    },
    imgLeft: {
        backgroundImage: `url(${path.join(
            process.env.PUBLIC_URL,
            "achievements",
            "achievements-background1.png"
        )})`,
        backgroundRepeat: "no-repeat",
    },

    imgRight: {
        backgroundImage: `url(${path.join(
            process.env.PUBLIC_URL,
            "achievements",
            "achievements-background2.png"
        )})`,
        backgroundRepeat: "no-repeat",
    },
    title: {
        wordWrap: "break-word",
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontWeight: "700",
    },
    text: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
    },
    feature: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontSize: "2rem",
        border: "1px solid #B8BBBD",
        "&__image-box": {
            backgroundColor: "#E9F5FF",
            padding: "1rem 3rem",
        },
    },
    "&__content": {},
}));



export default function Carousal({ links, component }) {
    
    const classes = useStyles();
    const [startingIndex, setStartingIndex, items] = useItems(links, component);
    
    return (
        <Grid container className={classes.root} direction="row">
            <Grid item xs={1}>
                <IconButton onClick={() => setStartingIndex(state => state++)} >
                    <ArrowBackIcon />
                </IconButton>
            </Grid>
            {items.map((item, index) => (
                <Grid item xs={12} sm={4} md={3} key={index}>
                    {item}
                </Grid>
            ))}
            <Grid item xs={1}>
                <IconButton onClick={() => setStartingIndex(state => state--)} >
                    <ArrowForwardIcon />
                </IconButton>
            </Grid>
        </Grid>

    );
}

const useItems = (links, component) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const numOfVisibleLinks = isSmallScreen ? 2 : 3;
    const [startingIndex, setStartingIndex] = useState(0);

    let items = []
    for (let i = startingIndex; i < startingIndex + numOfVisibleLinks; i++) {
        items.push(
            component(links[i > 0 ? i : links.length + i])
        );
    }

    return [startingIndex, setStartingIndex, items]
}
