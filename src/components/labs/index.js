import React from 'react';
import HeroSection from './HeroSection';
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";
import RecognisedBy from "./RecognisedBy";
import Grid from "@material-ui/core/Grid";

export default function Labs({ state }) {

    return <Grid container direction="column">
        <HeroSection state={state.HeroSection} />
        <HeroSection1 state={state.Features} invert={true} />
        <HeroSection1 state={state.Report} />
        <HeroSection1 state={state.USP} invert={true} />
        <RecognisedBy state={state.RecognisedBy} />
        <GetInTouch state={state.GetInTouch} />
    </Grid>
}