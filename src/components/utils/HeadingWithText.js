import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "@fontsource/nunito-sans";


const useStyles = makeStyles({
    root: {
        padding: "3rem 0",
        textAlign: "center",
        "&>div": {
            width: "65%"
        },
    }
})

export default function HeadingWithText({ content, ...props }) {
    const classes = useStyles();
    return <Grid container item className={classes.root} justifyContent="center" alignItems="center" {...props}>
        <Grid item>

            <Typography
                variant="h3" gutterBottom
                style={{
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                    fontWeight: "700"
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
