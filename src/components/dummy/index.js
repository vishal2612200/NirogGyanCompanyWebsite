import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import Believe from './Believe';
import Services from "./Services";
import Market from "./Market";
import GetInTouch from "./GetInTouch";
import { PageContext } from '../../App';

export default function Dummy({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("dummy")
    })

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Services state={state.Services} />
        <Believe state={state.Believe} />
        <Market state={state.Market} />
        <GetInTouch state={state.GetInTouch} />

        {children}
    </React.Fragment>
}