import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HeadingWithText } from "./utils/headingWithText"
import * as path from "path";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    watchVideoButton: {
        backgroundColor: "transparent",
        textTransform: "none",
        "&:hover": { backgroundColor: "transparent" },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    feature: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        fontSize: "2rem",
        border: "1px solid #B8BBBD",
        "&__image-box": {
            backgroundColor: "#E9F5FF",
            padding: "1rem 3rem"
        }
    },
    "&__content": {
    }
}
));

const Item = ({ textBig, textSmall }) => {
    return (<>
        <Grid container item style={{ backgroundColor: "#1242AC" }} direction="column">
        <Grid item >
            <Typography variant="h6">
                {textBig}
            </Typography>
        </Grid>
        <Grid item >
            <Typography variant="h6">
                {textSmall}
            </Typography>
        </Grid>
        </Grid>
    </>)

}

export default function Achievements() {
    const classes = useStyles();
    const achievements = useAchievements();

    return (<Grid container spacing={2} sm={4} >
        {
            achievements
        
        }
    </Grid>)

}

const useAchievements = () => {
    const achievements = [
        {
            textBig: "40 +", textSmall: "Labs Running",
        },
        {
            textBig: "300,000", textSmall: "Reports Generated",
        },

        {
            textBig: "4.7", textSmall: "Rating from Users",
        },
        {
            textBig: "04", textSmall: "Countries Reached",
        },

    ]
    return achievements.map(
        ({ textBig, textSmall }) => <Item textBig={textBig} textSmall={textSmall} />
    )
}