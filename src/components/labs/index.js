import React, {useContext, useEffect} from 'react';
import { PageContext } from '../../App';
import DocumentHeader from '../utils/DocumentHeader';
import HeroSection from './HeroSection';
import LabsJsx from './LabsJsx';

export default function Labs({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("solutions")
    })

    return <React.Fragment>
        <DocumentHeader state={state.DocumentHeader} />
        <HeroSection state={state.HeroSection} />
        <LabsJsx state={state.PageContentHolder} />
        {children}
    </React.Fragment>
}
