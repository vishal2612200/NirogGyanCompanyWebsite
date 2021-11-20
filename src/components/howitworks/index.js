import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import Report from './Report';
import Main from './Main';
import Video from './Video';
import { PageContext } from '../../App';
import DocumentHeader from '../utils/DocumentHeader';


export default function HowItWorks({ state, children }) {
    const {  setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("how-it-works")
    })
    return <React.Fragment>
        <DocumentHeader state={state.DocumentHeader}/>
        <HeroSection state={state.HeroSection} />
        <Report state={state.Report} />
        <Main state={state.Main} />
        <Video state={state.Video} />
        {children}
    </React.Fragment>
}
