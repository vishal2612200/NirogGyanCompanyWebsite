import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    return (
        <Helmet>
            <title>{documentHeader.title}</title>       
            <meta name="description" content="App Description" />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
    );
}
