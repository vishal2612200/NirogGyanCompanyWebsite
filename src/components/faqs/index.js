import React from 'react';
import HeroSection from './HeroSection';
import FrequentQuestions from './FrequentQuestions';
import Form from './Form';
import Grid from "@material-ui/core/Grid"


export default function FAQS({ state, children }) {

    return <Grid container direction="column">
        <HeroSection state={state.HeroSection} />
        <FrequentQuestions state={state.FrequentQuestions} />
        <Form state={state.Form} />
    </Grid>
}