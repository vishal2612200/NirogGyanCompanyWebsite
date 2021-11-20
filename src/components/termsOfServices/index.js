import React from 'react';
import Main from './Main';
import DocumentHeader from '../utils/DocumentHeader';

export default function Home({ state }) {
// console.log(state)
    return (
        <React.Fragment>
            <DocumentHeader state={state.DocumentHeader} />
            <Main state={state.Main} />
        </React.Fragment>)
}
