import React, { useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import HeadingWithText from "../utils/HeadingWithText";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorIcon from '@material-ui/icons/Error';

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
        width: "92%",
        [theme.breakpoints.down('sm')]: {
            width: "75%"
        }
    },
    textfieldinternal: {
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


function formReducer(state, action) {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload }

        case "email":
            return { ...state, email: action.payload }

        case "phoneNumber":
            return { ...state, phoneNumber: action.payload }

        case "subject":
            return { ...state, subject: action.payload }

        case "message":
            return { ...state, message: action.payload }
        default:
            throw new Error("Unknown action");
    }
}

const initialUserRecord = {
    "name": "",
    "email": "",
    "phoneNumber": "",
    "subject": "",
    "message": "",
}

export default function Form({ state: form }) {
    const classes = useStyles();
    const [userRecord, dispatchUserRecord] = useReducer(
        formReducer, initialUserRecord
    );

    const [openNotification, setOpenNotification] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        messageType: "success",
        showSpinner: false,
    });
    const { vertical, horizontal, open, messageType, showSpinner } = openNotification;

    const handleSubmit = event => {
        event.preventDefault();

        setOpenNotification(state => ({ ...state, showSpinner: true }))

        axios({
            method: 'POST',
            url: 'https://rnxsohimg1.execute-api.ap-south-1.amazonaws.com/Production/heartbeatusers',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                ...userRecord,
                "userId": Date.now().toString(),
                "appSource": "CompanyWebsite",

            }
        }).then(function (response) {
            showSnackBar("success");
        })
            .catch(function (error) {
                showSnackBar("error");
            });


        const showSnackBar = (messageType) => {

            setOpenNotification(state => ({
                ...state, showSpinner: false, open: true, messageType
            }));

            if (messageType === "success")
                dispatchUserRecord(({ type: "message", payload: "" }))
            dispatchUserRecord(({ type: "subject", payload: "" }))
        }
    };

    const handleClose = () => {
        setOpenNotification(state => ({ ...state, open: false }))
    }


    const Message = ({ message, backgroundColor, icon }) => <SnackbarContent message={
        <Grid container item justifyContent="center" alignItems="center">
            <Grid item style={{ marginRight: "1rem" }}>{icon}</Grid>
            <Grid item>{message}</Grid>
        </Grid>
    } style={{
        backgroundColor,
        width: "60vw",
        textAlign: "center"
    }} />


    const SuccessMessage = () => <Message icon={<CheckCircleOutlineIcon />} message="Thanks for contacting us, we will back to you soon." backgroundColor="#4caf50" />

    const ErrorMessage = () => <Message icon={<ErrorIcon />} message="Error" backgroundColor="#f44336" />




    return (
        <Grid container alignContent="center">
            <HeadingWithText content={form.header} />
            <Grid container item justifyContent="center" alignItems="center" >
                <Snackbar
                    autoHideDuration={8000}
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    key={"snackbar"}
                >
                    {messageType === "success" ? <SuccessMessage /> : <ErrorMessage />}
                </Snackbar>
            </Grid>
            <Grid item container className={classes.margin} >
                <Grid item md={2}></Grid>
                <Grid item md={8}>
                    <Paper style={{ border: "2px dashed #E5E5E5" }}>
                        <Grid container>
                            <Grid item container className={classes.textfieldmargin}>
                                <Grid item md={5}>
                                    <TextField fullWidth className={classes.margin} label="Name" variant="outlined"
                                        value={userRecord.name} onChange={(event) => dispatchUserRecord({ type: "name", payload: event.target.value })} required />
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={5}>
                                    <TextField fullWidth className={classes.margin} label="Email" variant="outlined"
                                        value={userRecord.email} onChange={(event) => dispatchUserRecord({ type: "email", payload: event.target.value })} required />
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.textfieldmargin}>
                                <Grid item md={5} >
                                    <TextField fullWidth className={classes.margin} label="Phone No" variant="outlined"
                                        value={userRecord.phoneNumber} onChange={(event) => dispatchUserRecord({ type: "phoneNumber", payload: event.target.value })} required />
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={5}>
                                    <TextField fullWidth className={classes.margin} label="Subject" variant="outlined"
                                        value={userRecord.subject}
                                        onChange={(event) => dispatchUserRecord({ type: "subject", payload: event.target.value })}
                                        required />
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.textfieldmargin}>
                                <Grid item className={classes.textfieldwidth}>
                                    <TextField multiline rows={4} fullWidth className={classes.textfieldinternal}
                                        label="Your Message" variant="outlined"
                                        value={userRecord.message}
                                        onChange={(event) => dispatchUserRecord({ type: "message", payload: event.target.value })}
                                        required />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} className={classes.sendButton}>
                                <Grid item>
                                    <Fab variant="extended" color="primary" aria-label="add" onClick={handleSubmit} className={classes.buttonfieldmargin} >
                                        Send Message {showSpinner ? <CircularProgress style={{ marginLeft: "15px" }} color="inherit" /> : ""}
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
