import React from 'react';
import HeroSection from './HeroSection';
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";
import Grid from "@material-ui/core/Grid"

export default function Corporate({ state }) {

    return <Grid container direction="column">
        <HeroSection state={state.HeroSection} />
        <HeroSection1 state={state.Features} invert={true} />
        <HeroSection1 state={state.Advantages} />
        <GetInTouch state={state.GetInTouch} />
    </Grid>
}
