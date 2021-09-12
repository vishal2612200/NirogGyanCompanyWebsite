import React from 'react';
import HeroSection from './HeroSection';
import Main from './Main';

export default function Blog({ state, children }) {
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Main state={state.Main} />
        {children}
    </React.Fragment>
}