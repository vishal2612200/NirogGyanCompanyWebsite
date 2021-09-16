
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import HeadingWithText from "../utils/HeadingWithText"


const useStyles = makeStyles((theme) => ({
    root: {
        border: "2px dashed white",
        "&>*": {
            marginBottom: "2rem"
        }
    },
    margin: {
        margin: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(5)

        }
    },
    textfieldmargin: {
        margin: theme.spacing(1),
    },
    buttonfieldmargin: {
        margin: theme.spacing(4),
    },

}));



export default function Form({ state: form }) {
    const classes = useStyles();
    return (
        <Grid container alignContent="center">
            <HeadingWithText content={form.header} />
            <Grid item container className={classes.margin} >
                <Grid item md={2}></Grid>
                <Grid item md={8}>
                    <Paper style={{ border: "2px dashed #E5E5E5" }}>
                        <Grid container>
                            <Grid item container className={classes.textfieldmargin}>

                                <Grid item md={5}>
                                    <TextField fullWidth className={classes.margin} label="Name" variant="outlined" required />
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={5}>
                                    <TextField fullWidth className={classes.margin} label="Email" variant="outlined" required />
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.textfieldmargin}>

                                <Grid item md={5} >
                                    <TextField fullWidth className={classes.margin} label="Phone No" variant="outlined" required />
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={5}>
                                    <TextField fullWidth className={classes.margin} label="Subject" variant="outlined" required />
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.textfieldmargin}>
                                <Grid item md={11}>
                                    <TextField multiline rows={4} fullWidth className={classes.margin} label="Your Message" variant="outlined" required />
                                </Grid>
                            </Grid>
                            <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonfieldmargin}>
                                Send Message
                            </Fab>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={2}></Grid>
            </Grid>
        </Grid>);
}
