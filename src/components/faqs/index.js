import React, {useContext, useEffect} from 'react';
import HeroSection from './HeroSection';
import FrequentQuestions from './FrequentQuestions';
import Form from './Form';
import { PageContext } from '../../App';


export default function FAQS({ state, children }) {
    const { page, setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("faqs")
    })
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <FrequentQuestions state={state.FrequentQuestions} />
        <Form state={state.Form} />
        {children}
    </React.Fragment>
}