import React from 'react';
import HeroSection from './HeroSection';
import Services from "./Services";
import Services1 from "./Services1";
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";
import Grid from "@material-ui/core/Grid";

export default function Solutions({ state }) {

    return <Grid container direction="column">
        <HeroSection state={state.HeroSection} />
        <Services state={state.Services} />
        <HeroSection1 state={state.WhyChooseUs} invert={true} />
        <HeroSection1 state={state.OurReports} />
        <Services1 state={state.SmartReportTypes}  />
        <HeroSection1 state={state.SmartReportsDifferentLanguages} />
        <GetInTouch state={state.GetInTouch} />
    </Grid>
}

