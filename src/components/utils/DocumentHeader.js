import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    return (
        <Helmet>
            <title>{ documentHeader.title }</title>
            <meta name="description" content={documentHeader.description} data-react-helmet="true" />
            <link rel="canonical" href={documentHeader.canonical} data-react-helmet="true" />
        </Helmet>
    );
}
