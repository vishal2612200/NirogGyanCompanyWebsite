import React from 'react';
import HeroSection from './HeroSection';
import FrequentQuestions from './FrequentQuestions';
import Form from './Form';
export default function FAQS({ state }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <FrequentQuestions state={state.FrequentQuestions} />
        <Form state={state.Form} />
    </React.Fragment>
}