import React from "react";
import { Helmet } from "react-helmet";
import HeroSecondary from "../utils/HeroSecondary"


export default function HeroSection({ state: heroSection }) {

    return (
        <>
            <Helmet>
                <title>NirogGyan HomePage</title>
                <meta name="description" content="home page description" />
                <link rel="canonical" href="https://www.niroggyan.com/home" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>

            <HeroSecondary state={heroSection} />
        </>
    )

}
