import React from 'react';
import HeroSection from './HeroSection';
import Main from './Main';

export default function Blog({ state }) {
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Main state={state.Main} />
    </React.Fragment>
}