import * as path from "path";

const heroImage = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/hero-image.svg"

const reportDigital = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/report-digital.png"

const reportPdfKidney = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/report-pdf-kidney.svg"
const reportPdfLiver = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/report-pdf-liver.svg"
const reportPdfCovid = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/report-pdf-covid.svg"

const mainApiIntegration = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/main-api-integration.svg"
const mainSoftware = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/main-software.svg"
const mainReport = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/main-report.svg"
const mainCustomer = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/main-customer.svg"


const arrow1 = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/arrow1.svg"
const arrow2 = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/arrow2.svg"
const arrow3 = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/arrow3.svg"

const line1 = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/line1.svg"
const line2 = "https://dn96iqv3kf32j.cloudfront.net/howitworks/static/imgs/line2.svg"



export default (function () {
    return {
        DocumentHeader:{
            title: "Explore Smart Report Generation & Working Process for Pathology Labs",
            description: "Understand the Actual Workflow of Smart Report along with API integration for Pathology Labs & Hospitals. Check out Digital Smart Reports available in PDF form.",
            canonical: "https://www.niroggyan.com/how-it-works",
        },
        HeroSection: {
            contentLeft: {

                heading: "How It Works",
                breadcrumbs: [
                    { text: "Home", link: "/home" },
                    { text: "How It Works", link: "/how-it-works" }
                ],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),
            },
            contentRight: {

                image: { imagePath: heroImage, altText: "heroImage" },
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },

        Report: {
            header: {
                heading: [{ text: "One idea, branched into multiple avatars" }],
            },
            imagePanel: {
                digital: {
                    buttonText: "Digital Smart Report",
                    images: [{ imagePath: reportDigital, altText: "reportDigital" }],
                },
                pdf: {
                    buttonText: "PDF Smart Report",
                    images: [
                         { imagePath: reportPdfCovid, altText: "covid" },
                         { imagePath: reportPdfKidney, altText: "kidney" },
                         { imagePath: reportPdfLiver, altText: "liver" },
                    ]
                },

            }
        },

        Main: {
            header: {
                heading: [{ text: "How It Works" }],
                description: "The technical magic behind the scenes : 100% automated and error-free."
            },
            cardsList: [
                {
                    image: { imagePath: mainApiIntegration, altText: "mainApiIntegration" },
                    heading: "API Integration",
                    description: "Clients LIS send anonymised patient's data to NirogGyan's API in real time.",
                    arrowPath: arrow3,
                    linePath: line2,
                },
                {
                    image: { imagePath: mainSoftware, altText: "mainSoftware" },
                    heading: "Software",
                    description: "NirogGyan’s software creates the perfect Smart Report - each test is atomised as ‘card’ & each panel is linked witth the ‘knowledge bank’",
                },
                {
                    image: { imagePath: mainReport, altText: "mainReport" },
                    heading: "Reports",
                    description: "Clients LIS send anonymised patient's data to NirogGyan's API in real time.",
                    arrowPath: arrow1,
                    linePath: line1,
                },
                {
                    image: { imagePath: mainCustomer, altText: "mainCustomer" },
                    heading: "Customers",
                    description: "Complete Automation ensures seamless delivery to all customers of clients (the labs)",
                    arrowPath: arrow2,
                    linePath: line1,
                },
            ],
        },

        Video: {
            header: {
                heading: [{ text: "Digital Solutions for Smart Labs & Patients" }],
                description: ""
            },
            videoPanel: {
                title: "Niroggyan Startup Explanation",
                videoLink: "https://www.youtube.com/embed/G9tW9HKKnE4/"
            },
        },
    };
})();
