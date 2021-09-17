import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "@fontsource/nunito-sans";


const useStyles = makeStyles({
    root: {
        padding: "3rem 0",
        textAlign: "center",
    }
})

export default function HeadingWithText({ content, ...props }) {
    const classes = useStyles();
    return <Grid container item className={classes.root} justifyContent="center" alignItems="center" {...props}>
        <Grid item sm={10} md={8}>

            <Typography
                variant="h3" gutterBottom
                style={{
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                    fontSize: "2.7rem",
                }}>
                {content.heading}
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                style={{
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                }}>
                {content.description}
            </Typography>
        </Grid>
    </Grid>

}
