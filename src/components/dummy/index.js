import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import Believe from './Believe';
import Services from "./Services";
import HeroSection1 from "./HeroSection1";
import GetInTouch from "./GetInTouch";

export default function Dummy({ state, children }) {
    
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Services state={state.Services} />
        <Believe state={state.Believe} />
        <HeroSection1 state={state.HeroSection1} />
        <HeroSection1 state={state.HeroSection2} />

        <GetInTouch state={state.GetInTouch} />
        {children}
    </React.Fragment>
}