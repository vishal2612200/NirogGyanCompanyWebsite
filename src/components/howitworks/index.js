import React from 'react';
import HeroSection from './HeroSection';
import RecognisedBy from './RecognisedBy';

export default function HowItWorks({ state }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <RecognisedBy state={state.RecognisedBy} />
    </React.Fragment>
}