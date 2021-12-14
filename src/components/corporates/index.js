import React, {useContext, useEffect} from 'react';
import { PageContext } from '../../App';
import DocumentHeader from '../utils/DocumentHeader';
import CorporatesJsx from './CorporatesJsx';

export default function Corporates({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("solutions")
    })

    return <React.Fragment>
        <DocumentHeader state={state.DocumentHeader} />
        <CorporatesJsx state={state.PageContentHolder} />
        {children}
    </React.Fragment>
}
