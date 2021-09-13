import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import RecognisedBy from './RecognisedBy';
import ExpertTeam from './ExpertTeam';
import ProductConsultant from './ProductConsultant';
import HelpedOrganisations from './HelpedOrganisations';
import Market from './Market';
import Believe from './Believe';
import { PageContext } from '../../App';

export default function About({ state, children }) {
    const { page, setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("about")
    })

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Market state={state.Market} />
        <Believe state={state.Believe} />
        <ExpertTeam state={state.ExpertTeam} />
        <HelpedOrganisations state={state.HelpedOrganisations} />
        <ProductConsultant state={state.ProductConsultant} />
        <RecognisedBy state={state.RecognisedBy} />
        {children}
    </React.Fragment>
}