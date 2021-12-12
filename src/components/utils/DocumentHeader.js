import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function DocumentHeader({ state: documentHeader }) {

    return (
        <HelmetProvider>
            <Helmet>
                <title>{documentHeader.title}</title>
                <meta name="description" content={documentHeader.description} />
                <link rel="canonical" href={documentHeader.canonical} />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
        </HelmetProvider>
    );
}
