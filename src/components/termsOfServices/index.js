import React from 'react';
import Main from './Main';

export default function Home({ state }) {
console.log(state)
    return (
        <React.Fragment>
            <Main state={state.Main} />
        </React.Fragment>)
}