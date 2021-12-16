import React, {useContext, useEffect} from 'react';
import { PageContext } from '../../App';
import DocumentHeader from '../utils/DocumentHeader';
import SolutionJsx from './SolutionJsx';

export default function Solutions({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("solutions")
    })

    return <React.Fragment>
        <DocumentHeader state={state.DocumentHeader} />
        <SolutionJsx state={state.PageContentHolder} />
        {children}
    </React.Fragment>
}
