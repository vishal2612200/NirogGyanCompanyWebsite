import React, { useContext, useEffect } from 'react';
import HeroSection from './HeroSection';
import Main from './Main';
import { PageContext } from '../../App';
//import DocumentHeader from '../utils/DocumentHeader';
import { Helmet } from "react-helmet";


export default function Blogs({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("blogs")
    })

    return <React.Fragment>
        {/* <DocumentHeader state={state.DocumentHeader} /> */}
        <Helmet>
            <title>blogs page</title>
            <meta name="description" content="this is your blogpage" />
            <link rel="canonical" href="https://www.niroggyan.com/blogs" />
        </Helmet>
        <HeroSection state={state.HeroSection} />
        <Main state={state.Main} />
        {children}
    </React.Fragment>
}
