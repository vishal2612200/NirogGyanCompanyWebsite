import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import Services from "./Services";
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";

export default function Dummy({ state, children }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Services state={state.Services} />
        <HeroSection1 state={state.WhyChooseUs} invert={true} />
        <HeroSection1 state={state.OurReports} />
        <HeroSection1 state={state.SmartReportTypes} invert={true} />
        <HeroSection1 state={state.SmartReportsDifferentLanguages} />
        <GetInTouch state={state.GetInTouch} />
        {children}
    </React.Fragment>
}

