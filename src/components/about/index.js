import React from 'react';
import HeroSection from './HeroSection';
import RecognisedBy from './RecognisedBy';
import ExpertTeam from './ExpertTeam';
import ProductConsultant from './ProductConsultant';
import HelpedOrganisations from './HelpedOrganisations';
import Market from './Market';
import Believe from './Believe';
import Grid from "@material-ui/core/Grid"

export default function About({ state, children }) {


    return <Grid container direction="column">
        <HeroSection state={state.HeroSection} />
        <Market state={state.Market} />
        <Believe state={state.Believe} />
        <ExpertTeam state={state.ExpertTeam} />
        <HelpedOrganisations state={state.HelpedOrganisations} />
        <ProductConsultant state={state.ProductConsultant} />
        <RecognisedBy state={state.RecognisedBy} />
    </Grid>
}