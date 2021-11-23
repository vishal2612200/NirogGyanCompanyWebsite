import React from 'react';
import HeroSection from './HeroSection';
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";

export default function Dummy({ state, children }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <HeroSection1 state={state.Features} invert={true} />
        <HeroSection1 state={state.Advantages} />
        <GetInTouch state={state.GetInTouch} />
        {children}
    </React.Fragment>
}