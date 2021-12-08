import { Helmet } from "react-helmet";

export default function DocumentHeader({ state: documentHeader }) {

    let showTitle = ""
    let showDescription = ""
    let currentUrl = window.location.href

    if(currentUrl === "https://www.niroggyan.com/") {
        showTitle = "NirogGyan - Smart & Modern Diagnostic Reports for Pathology Labs"
        showDescription = "Simplifying Medical Reports for Pathology Labs & Diagnosis centers. Hospitals can do Rebrand their image with Smart Reports can scale their revenue by 30%."
    }

    if(currentUrl === "https://www.niroggyan.com/home") {
        showTitle = "NirogGyan - Smart & Modern Diagnostic Reports for Pathology Labs"
        showDescription = "Simplifying Medical Reports for Pathology Labs & Diagnosis centers. Hospitals can do Rebrand their image with Smart Reports can scale their revenue by 30%."
    }

    if(currentUrl === "https://www.niroggyan.com/about") {
        showTitle = "Discover Our Story in Modernizing Medical Report - About NirogGyan"
        showDescription = "NirogGyan is First startup in india, who has modified medical reports and made it patient friendly. Meet our Investors & Execution Team of NirogGyan Now"

    }

    if(currentUrl === "https://www.niroggyan.com/how-it-works") {
        showTitle = "Explore Smart Report Generation & Working process for Pathology Labs"
        showDescription = "Understand the Actual Workflow of Smart Report along with API integration for Pathology Labs & Hospitals. Check out Digital Smart Reports available in PDF form."

    }

    if(currentUrl === "https://www.niroggyan.com/blogs") {
        showTitle = "NirogGyan Executive Blogs & Updates on Medical Industry"
        showDescription = "NirogGyan features insights, trends, latest medical updates & opinions to bridge the gap in the medical and health industry. Explore our blog section now."

    }

    if(currentUrl === "https://www.niroggyan.com/faqs") {
        showTitle = "Frequently Asked Questions (FAQ) about Smart Reports | NirogGyan"
        showDescription = "All your queries about Smart Reports are answered here. If you don't find what you need, contact our customer care. Read Doctor's opinion about Smart Reports."

    }

    return (
        <Helmet>
            <title>{ showTitle }</title>
            <meta name="description" content={showDescription} />
            <link rel="canonical" href={documentHeader.canonical} />
        </Helmet>
    );
}
