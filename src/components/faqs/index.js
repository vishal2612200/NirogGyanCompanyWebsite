import React from 'react';
import HeroSection from './HeroSection';
import FrequentQuestions from './FrequentQuestions';
import Form from './Form';
export default function FAQS({ state, children }) {

    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <FrequentQuestions state={state.FrequentQuestions} />
        <Form state={state.Form} />
        {children}
    </React.Fragment>
}