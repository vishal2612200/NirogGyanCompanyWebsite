import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        background: "#3567D6",
        padding: "2rem"
    },
    block1: {
        textAlign: "left",
        color: "#fff"
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
        borderRadius: "20px",
        background: "transparent",
        "&::placeholder": {
            color: "#fff"
        }
    }
}));







const Block1 = ({ content }) => {
    const classes = useStyles()
    return <Grid container item direction="column" sm={5} justifyContent="space-around" alignItems="flex-start" className={classes.block1}>
        <Grid item>
            <Typography
                variant="h4"
                className={classes.heading}>
                {content.heading}
            </Typography>
        </Grid>
        <Grid item>
            <Typography
                variant="h6"
                className={classes.description}>
                {content.description}
            </Typography>
        </Grid>

        <Grid item>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                {content.footer}
            </Typography>
        </Grid>
    </Grid>
}

const Block2 = ({ content }) => {
    const classes = useStyles()

    return <Grid item sm={6} md={5} style={{ justifySelf: "stretch", padding: "1rem" }}>
        <input placeholder={content.placeholderText} className={classes.inputBox} style={{width:"100%"}} />
    </Grid>

}

const Block3 = ({ content }) => {
    const classes = useStyles()

    return <Grid item sm={6} md={2}>
        <Button variant="contained" className={classes.button}>
            {content.buttonText}
        </Button>
    </Grid>

}


export default function MailingList({ state: mailingList }) {
    const classes = useStyles();
    return <Grid container spacing={2} justifyContent="space-evenly" alignItems="center" className={classes.root}>
        <Block1 content={mailingList.block1} />
        <Block2 content={mailingList.block2} />
        <Block3 content={mailingList.block3} />
    </Grid>

}