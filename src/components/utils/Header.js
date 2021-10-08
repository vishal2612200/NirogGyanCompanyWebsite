import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";



const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem 0rem",

        "&>div": {
            marginBottom: "2rem"
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            justifyContent: "center",
        }
    },
    heading: {
        paddingBottom: "1rem"
    }
}));


export default function Header({ content, ...props }) {
    const classes = useStyles();
    return <Grid container item direction="column" className={classes.header} justifyContent="space-evenly" {...props}>
        <Grid item>
            <Typography
                variant="h4" gutterBottom
                className={classes.headingstyle}
                style={{
                    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
                }}>
                {
                    content.heading.map(
                        ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || { text })
                    )}
            </Typography>
            {
                content?.description.map(({ text }, index) => <Typography
                    variant="body1"
                    color="textSecondary"
                    key={index}
                    style={{
                        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                        paddingBottom: "0.5rem"
                    }}>
                    {text}
                </Typography>
                )}

        </Grid>
    </Grid>
}

