import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    headingContainer: {
        textAlign: "center",
    }
})

export default function HeadingWithText({ content }) {
    const classes = useStyles();
    return <Grid item className={classes.headingContainer}>
        <Typography
            variant="h3"
            className={classes.heading}>
            {content.heading}
        </Typography>
        <Typography
            variant="h6"
            color="textSecondary"
            className={classes.description}>
            {content.description}
        </Typography>
    </Grid>

}
