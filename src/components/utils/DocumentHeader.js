import React, {useState, useEffect} from 'react'
import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    let collectData = {
        "title": documentHeader.title,
        "description": documentHeader.description,
        "canonical": documentHeader.canonical
    }

    const [currentHeaders, setCurrentHeaders] = useState("")    

    useEffect(() => {
        setCurrentHeaders(collectData)
    }, [])

    console.log("currentHeaders\n", currentHeaders)

    return (
        <Helmet>
            <title>{ currentHeaders.title }</title>
            <meta name="description" content={currentHeaders.description} data-react-helmet="true" />
            <link rel="canonical" href={currentHeaders.canonical} data-react-helmet="true" />
        </Helmet>
    );
}
