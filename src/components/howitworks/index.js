import React from 'react';
import HeroSection from './HeroSection';
import Report from './Report';
import Main from './Main';

export default function HowItWorks({ state }) {
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Report state={state.Report} />
 <Main state={state.Main} />
    </React.Fragment>
}