
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "&>*": {
            marginBottom: "2rem"
        }
    }
}));



export default function Form({ state: form }) {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container item xs={12} justifyContent="space-evenly">

                <Grid item>
                    <TextField label="Name" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField label="Email" variant="outlined" />
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent="space-evenly">

                <Grid item>
                    <TextField label="Phone No" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField label="Subject" variant="outlined" />
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent="space-evenly">

                <Grid item>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-amount"
                    value={"78"}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
                    />
                    </FormControl>    </Grid>
            </Grid>

        </Grid>);
}

