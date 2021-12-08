import React, { useContext, useEffect} from 'react';
import HeroSection from './HeroSection';
import Main from './Main';
import { PageContext } from '../../App';
import DocumentHeader from '../utils/DocumentHeader';

export default function Blogs({ state, children }) {
    const {  setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("blogs")
    })

    return <React.Fragment>
        <DocumentHeader state={state.DocumentHeader} />
        <HeroSection state={state.HeroSection} />
        <Main state={state.Main} />
        {children}
    </React.Fragment>
}
