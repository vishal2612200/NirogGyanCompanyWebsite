//import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function DocumentHeader({ state: documentHeader }) {

    return (
        <HelmetProvider>
            <Helmet>
                <title>{documentHeader.title}</title>
                <meta name="description" content={documentHeader.description} />
                <link rel="canonical" href={documentHeader.canonical} />
            </Helmet>
        </HelmetProvider>
    );
}
