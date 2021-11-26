import React from 'react';
import HeroSection from './HeroSection';
import Main from './Main';
import Grid from "@material-ui/core/Grid"

export default function Blogs({ state, children }) {

    return <Grid container direction="column">
        <HeroSection state={state.HeroSection} />
        <Main state={state.Main} />
    </Grid>
}