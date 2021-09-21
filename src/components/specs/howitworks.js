import * as path from "path";


import heroImage from "../howitworks/static/imgs/hero-image.png"
import reportDigital from "../howitworks/static/imgs/report-digital.png"
import reportPdf from "../howitworks/static/imgs/report-pdf.png"
import arrow3 from "../howitworks/static/imgs/arrow3.svg"
import line2 from "../howitworks/static/imgs/line2.svg"
import mainSoftware from "../howitworks/static/imgs/main-software.png"
import mainReport from "../howitworks/static/imgs/main-report.png"
import arrow1 from "../howitworks/static/imgs/arrow1.svg"
import line1 from "../howitworks/static/imgs/line1.svg"
import mainCustomer from "../howitworks/static/imgs/main-customer.png"
import arrow2 from "../howitworks/static/imgs/arrow2.svg"


export default (function () {
    return {
        HeroSection: {
            contentLeft: {

                heading: "How it Works",
                breadcrumbs: [
                    { text: "Home", link: "/home" },
                    { text: "How It Works", link: "/how-it-works" }
                ],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),
            },
            contentRight: {

                imagePath: heroImage,
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },

        Report: {
            header: {
                heading: [{ text: "One idea, branched into multiple avatars" }],
                description: "Every human being is at a different stage of ‘health’. Our SmartReports come in various forms, for the best impact on your diagnostics business.",
            },
            imagePanel: {
                digital: {
                    buttonText: "Digital Smart Report",
                    images: [reportDigital]
                },
                pdf: {
                    buttonText: "PDF Smart Report",
                    images: [
                        reportPdf,
                        reportPdf,
                        reportPdf
                    ]
                },

            }
        },

        Main: {
            header: {
                heading: [{ text: "How It Works" }],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            cardsList: [
                {
                    imagePath: "main-api-integration.svg",
                    heading: "API Integration",
                    description: "Clients LIS send anonymised patient's data to NirogGyan's API in real time.",
                    arrowPath: arrow3,
                    linePath: line2,
                },
                {
                    imagePath: mainSoftware,
                    heading: "Software",
                    description: "NirogGyan’s software creates the perfect SmartReport - each test is atomised as ‘card’ & each panel is linked witth the ‘knowledge bank’",
                },
                {
                    imagePath: mainReport,
                    heading: "Reports",
                    description: "Clients LIS send anonymised patient's data to NirogGyan's API in real time.",
                    arrowPath: arrow1,
                    linePath: line1,
                },
                {
                    imagePath: mainCustomer,
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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo."
            },
            videoPanel: {
                title: "Main Video",
                videoLink: "https://www.youtube.com/embed/H0cHIewcQ2M"
            },
        },
    };
})();
