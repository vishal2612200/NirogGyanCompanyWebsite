import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import RecognisedBy from './RecognisedBy';
import ExpertTeam from './ExpertTeam';
import ProductConsultant from './ProductConsultant';
import HelpedOrganisations from './HelpedOrganisations';
import Market from './Market';
import Believe from './Believe';
import DocumentHeader from '../utils/DocumentHeader';
import { PageContext } from '../../App';
import { Helmet } from "react-helmet";


export default function About({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("about")
    })

    console.log("on about pagen\n", state.DocumentHeader.description)

    return <React.Fragment>
        {/* <DocumentHeader state={state.DocumentHeader} /> */}
        <Helmet>
            <title>{state.DocumentHeader.title}</title>
            <meta name="description" content="All our exciting products for diagnostics services!" />
            <meta name="title" description="NirogGyan" />
        </Helmet>
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
