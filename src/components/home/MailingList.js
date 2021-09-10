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
        padding: "2rem 9rem",
        "&>*": {
            padding: "1rem"
        }
    },

    block1: {
        textAlign: "left",
        color: "#fff",
    },

    block2: {
        textAlign: "left",
        color: "#fff",
    },
    button: {
        borderRadius: "20px",
        padding: "0.5rem 2rem",
        textTransform: "none",
        backgroundColor: "#052E88",
        color: "white"
    },
    inputBox: {

        "&>input": {
            minWidth: "min-content",
            width: "60%",
            color: "#fff",
            padding: "0.5rem 2rem",
            borderRadius: "20px",
            background: "transparent",
            "&::placeholder": {
                color: "#fff"
            }

        }
    },
    footertext: {
        display: "inline",
        marginRight: "1rem",
        fontWeight: "bolder"
    }
}));







const Block1 = ({ content }) => {
    const classes = useStyles()
    return <Grid container item direction="column" sm={12} md={5} justifyContent="space-around" alignItems="flex-start" className={classes.block1}>
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

        <Grid item style={{ marginTop: "1rem" }}>
            {content.footer.map(item => <Typography variant="h5" className={classes.footertext}>
                {item}
            </Typography>)}
        </Grid>
    </Grid>
}

const Block2 = ({ content }) => {
    const classes = useStyles()

    return <Grid item  md={4} className={classes.inputBox}>
        <input placeholder={content.placeholderText} />
    </Grid>

}

const Block3 = ({ content }) => {
    const classes = useStyles()

    return <Grid item  md={3}>
        <Button variant="contained" className={classes.button}>
            {content.buttonText}
        </Button>
    </Grid>

}


export default function MailingList({ state: mailingList }) {
    const classes = useStyles();
    return <Grid container justifyContent="flex-start" alignItems="center" className={classes.root}>
        <Block1 content={mailingList.block1} />
        <Block2 content={mailingList.block2} />
        <Block3 content={mailingList.block3} />
    </Grid>

}