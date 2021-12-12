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
import {ReactTitle} from 'react-meta-tags';

export default function About({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("about")
    })

    return <React.Fragment>
        {/* <DocumentHeader state={state.DocumentHeader} /> */}
        <ReactTitle title="Page 2"/>
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
