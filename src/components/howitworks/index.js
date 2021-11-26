import React from 'react';
import HeroSection from './HeroSection';
import Report from './Report';
import Main from './Main';
import Video from './Video';
import Grid from "@material-ui/core/Grid";


export default function HowItWorks({ state, children }) {
 
    return <Grid container direction="column">
      <HeroSection state={state.HeroSection} />
        <Report state={state.Report} />
        <Main state={state.Main} />
        <Video state={state.Video} />
        {children}
    </Grid>
}