import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'react-alice-carousel/lib/alice-carousel.css';
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(to right, #52BBE8, #69C3EB, #A3D8F1, #E1EFF8)",
        marginTop: "0.5rem",
        padding: "0.5rem",
        color: "#fff"
    },
    title: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        fontWeight: "700",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
    headerContainer: {
        textAlign: "left",
        margin: "2rem",
        color: "#fff"
    },
    contentLeft: {
        textAlign: "left",
        justifyContent: "space-evenly",
        alignItems: "left",
        padding: "2rem",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        }
    },

    button: {
        borderRadius: "20px",
        padding: "0.5rem 2rem",
        textTransform: "none",
        backgroundColor: "#052E88",
        color:"white"
    },
    inputBox: {
        padding: "0.5rem 2rem",
        borderRadius: "20px"
    }
}));



const Header = ({ content, children }) => {
    const classes = useStyles();
    return <Grid item className={classes.headerContainer}>
        <Typography
            variant="h4"
            className={classes.heading}>
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            className={classes.description}>
            {content.description}
        </Typography>
        {children}
    </Grid>

}


const ImageBox = ({ imagePath }) => (
    <Grid item >
        <img src={imagePath} alt="logo" />
    </Grid>)



const ContentLeft = ({ content }) => {
    const classes = useStyles()
    return <Grid container item direction="column" sm={5} justifyContent="stretch" alignItems="flex-start" className={classes.contentLeft}>
        <Header content={content} >
            <Typography variant="h5" style={{marginTop:"1rem"}}>
                {content.footer}
            </Typography>
        </Header>
    </Grid>

}



const ContentRight = ({ content }) => {
    const classes = useStyles();

    return <Grid container item sm={7} justifyContent="space-evenly" alignItems="center">
        <Grid item>
            <input placeholder={content.placeholderText} className={classes.inputBox} />
        </Grid>
        <Grid item>
            <Button variant="contained" className={classes.button}>
                {content.buttonText}
            </Button>
        </Grid>
    </Grid>
}

export default function MailingList({ state: mailingList }) {
    const classes = useStyles();
    return <Grid container justifyContent="space-evenly" alignItems="center" style={{ background: "#3567D6" }}>
        <ContentLeft content={mailingList.contentLeft} />
        <ContentRight content={mailingList.contentRight} />
    </Grid>

}