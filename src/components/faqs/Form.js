
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import HeadingWithText from "../utils/HeadingWithText";


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
            // marginLeft: theme.spacing(5)
            margin: theme.spacing(2.4),

        }
    },

    textfieldmargin: {
        margin: theme.spacing(1),
    },
    textfieldwidth: {
        width:"92%",
        [theme.breakpoints.down('sm')]: {
            width:"75%"
        }
    },
    textfieldinternal:{
        margin: theme.spacing(3),
        
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2.8),
        }
    },
    buttonfieldmargin: {
        margin: theme.spacing(4),
    },
    sendButton: {
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",

        }
    }

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
                                <Grid item className={classes.textfieldwidth}>
                                    <TextField multiline rows={4} fullWidth className={classes.textfieldinternal} label="Your Message" variant="outlined" required />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} className={classes.sendButton}>
                                <Grid item>

                                    <Fab variant="extended" color="primary" aria-label="add" className={classes.buttonfieldmargin}>
                                        Send Message
                                    </Fab>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={2}></Grid>
            </Grid>
        </Grid>);
}
