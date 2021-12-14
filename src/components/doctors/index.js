import React, {useContext, useEffect} from 'react';
import { PageContext } from '../../App';
import DocumentHeader from '../utils/DocumentHeader';
import DoctorsJsx from './DoctorsJsx';

export default function Doctors({ state, children }) {
    const { setPage } = useContext(PageContext);
    useEffect(() => {
        setPage("solutions")
    })

    return <React.Fragment>
        <DocumentHeader state={state.DocumentHeader} />
        <DoctorsJsx state={state.PageContentHolder} />
        {children}
    </React.Fragment>
}
