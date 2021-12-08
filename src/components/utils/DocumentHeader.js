import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    let dataRecieved = {
        "title": documentHeader.title,
        "description": documentHeader.description,
        "canonical": documentHeader.canonical
    }
    console.log("dataRecieved\n", dataRecieved)

    return (
        <Helmet>
            <title>{ dataRecieved.title }</title>
            <meta name="description" content={dataRecieved.description} />
            <link rel="canonical" href={dataRecieved.canonical} />
        </Helmet>
    );
}
