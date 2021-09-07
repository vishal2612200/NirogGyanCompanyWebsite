import React from 'react';
import HeroSection from './HeroSection';
import RecognisedBy from './RecognisedBy';
import GetInTouch from './GetInTouch';
import ExpertTeam from './ExpertTeam';
import ProductConsultant from './ProductConsultant';
import HelpedOrganisations from './HelpedOrganisations';

export default function Home({ state }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <ExpertTeam state={state.ExpertTeam} />
        <HelpedOrganisations state={state.HelpedOrganisations} />
        <ProductConsultant state={state.ProductConsultant} />
        <RecognisedBy state={state.RecognisedBy} />
        <GetInTouch state={state.GetInTouch} />
    </React.Fragment>
}