import React from 'react';
import Brand from './Brand';
import Services from './Services';
import Bytes from './Bytes';
import HeroSection from './HeroSection';
import Features from './Features';
import Report from './Report';
import Achievements from './Achievements';
import ClientMessage from './ClientMessage';
import MailingList from './MailingList';



export default function Home({ state }) {
    
    return (
        <React.Fragment>
            <HeroSection state={state.HeroSection} />
            <Brand state={state.Brand} />
            <Features state={state.Features} />
            <Services state={state.Services} />
            <Bytes state={state.Bytes} />
            <Report state={state.Report} />
            <Achievements state={state.Achievements} />
             <ClientMessage state={state.ClientMessage} />
            <MailingList state={state.MailingList} />
        </React.Fragment>)
}