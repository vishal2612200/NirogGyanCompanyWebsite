import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    return (
        <Helmet>
            <meta
                name="description"
                content={documentHeader.description}
                data-react-helmet="true"
            />
            <title>{documentHeader.title}</title>
        </Helmet>
    );
}
