import React from 'react';
import Main from './Main';
import Grid from "@material-ui/core/Grid";


export default function TermsOfServices({ state }) {

    return <Grid container direction="column">
        <Main state={state.Main} />
    </Grid>
}