import React from 'react';
import PrivacyPolicy from "./PrivacyPolicy"
import InformationCollectionAndUse from "./InformationCollectionAndUse"
import LogData from "./LogData"
import Communications from "./Communications"
import Cookies from "./Cookies"
import Security from "./Security"
import ChangesToThisPrivacyPolicy from "./ChangesToThisPrivacyPolicy"
import ContactUs from "./ContactUs"

export default function Index({ state }) {
    console.log(state)
    return (
        <React.Fragment>
            <PrivacyPolicy state={state.PrivacyPolicy} />
            <InformationCollectionAndUse state={state.InformationCollectionAndUse} />
            <LogData state={state.LogData} />
            <Communications state={state.Communications} />
            <Cookies state={state.Cookies} />
            <Security state={state.Security} />
            <ChangesToThisPrivacyPolicy state={state.ChangesToThisPrivacyPolicy} />
            <ContactUs state={state.ContactUs} />
        </React.Fragment>)
}