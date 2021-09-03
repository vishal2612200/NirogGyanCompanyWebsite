import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "0.5rem",
        padding: "2rem",
        color: "#fff",
        backgroundColor: "#163B76",
        "&>div": {
    
}
    },
    heading: {
        paddingBottom: "1rem"
    },
    button: {
        borderRadius: "20px",
        padding: "0.5rem 2rem",
        textTransform: "none",
        backgroundColor: "#052E88",
        color: "white"
    },
    inputBox: {
        padding: "0.5rem 2rem",
        borderRadius: "20px"
    }
}));

const Block1 = ({ content }) => {

    return <Grid container item direction="column" justifyContent="space-evenly" sm={3}>
        <Grid item><img src={content.logoImage} alt="logo" /></Grid>
        <Grid item>  <Typography variant="h6">{content.copyrightText}</Typography></Grid>
    </Grid>
}

const Block = ({ content }) => {
    const classes = useStyles();
    return <Grid item sm={3}>
        <Typography
            variant="h4"
            className={classes.heading}>
            {content.heading}
        </Typography>
        {content.items.map(link => <Typography variant="h6">{link}</Typography>)}
    </Grid>
}

const Block4 = ({ content }) => {
    const classes = useStyles();

    return <Grid item sm={3}>
        <Typography
            variant="h4"
            className={classes.heading}>
            {content.heading}
        </Typography>
        {content.items.map(imagePath => <img src={imagePath} alt="logo" />)}
        <Typography variant="h6">{content.copyrightText}</Typography>
    </Grid>
}

export default function Footer({ state: footer }) {
    const classes = useStyles();
    return <Grid container justifyContent="space-between" alignItems="stretch" className={classes.root}>
        <Block1 content={footer.block1} />
        <Block content={footer.block2} />
        <Block content={footer.block3} />
        <Block4 content={footer.block4} />
    </Grid>

}