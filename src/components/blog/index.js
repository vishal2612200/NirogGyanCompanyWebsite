import React, { useContext, useEffect} from 'react';
import HeroSection from './HeroSection';
import Main from './Main';
import { PageContext } from '../../App';


export default function Blog({ state, children }) {
    const { page, setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("blog")
    })
    return <React.Fragment>
        <HeroSection state={state.HeroSection} />
        <Main state={state.Main} />
        {children}
    </React.Fragment>
}