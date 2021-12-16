import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    return (

        <Helmet htmlAttributes={{ lang: 'en' }} title={documentHeader.title} meta={[
            {
                name: 'description',
                content: documentHeader.description,
            },
        ]}
            links={[
                {
                    rel: 'canonical',
                    href: documentHeader.canonical,
                },
            ]}
        />

    );
}
