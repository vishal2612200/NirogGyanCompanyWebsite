import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../utils/Header";
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
}));


export default function Index({ state }) {
    return (
        <React.Fragment>
            <HeaderWrapper state={state.PrivacyPolicy} />
            <HeaderWrapper state={state.InformationCollectionAndUse} />
            <HeaderWrapper state={state.LogData} />
            <HeaderWrapper state={state.Communications} />
            <HeaderWrapper state={state.Cookies} />
            <HeaderWrapper state={state.Security} />
            <HeaderWrapper state={state.ChangesToThisPrivacyPolicy} />
            <HeaderWrapper state={state.ContactUs} />
        </React.Fragment>)
}


const HeaderWrapper =  function ({ state }) {
    const classes = useStyles();
    return <Grid container className={classes.root} justifyContent="center" alignItems="center">
        <Header content={state.header} xs={10} />
    </Grid>

}