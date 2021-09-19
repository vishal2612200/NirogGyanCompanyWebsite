import * as path from "path";

export default (function () {
    return {
        HeroSection: {
            contentLeft: {

                heading: "How it Works",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "How It Works", link: "/how-it-works" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {

                imagePath: path.join(process.env.PUBLIC_URL, "howitworks", "hero-image.png"),
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
                    images: [path.join(process.env.PUBLIC_URL, "howitworks", "report-digital.png")]
                },
                pdf: {
                    buttonText: "PDF Smart Report",
                    images: [path.join(process.env.PUBLIC_URL, "howitworks", "report-pdf.png"),
                    path.join(process.env.PUBLIC_URL, "howitworks", "report-pdf.png"),
                    path.join(process.env.PUBLIC_URL, "howitworks", "report-pdf.png")]
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
                    imagePath: path.join(process.env.PUBLIC_URL, "howitworks", "main-api-integration.svg"),
                    heading: "API Integration",
                    description: "Clients LIS send anonymised patient's data to NirogGyan's API in real time.",
                    arrowPath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "arrow3.svg"
                    ),
                    linePath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "line2.svg"
                    ),
                },
                {
                    imagePath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "main-software.svg"
                    ),
                    heading: "Software",
                    description: "NirogGyan’s software creates the perfect SmartReport - each test is atomised as ‘card’ & each panel is linked witth the ‘knowledge bank’",
                },
                {
                    imagePath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks",
                        "main-report.svg"
                    ),
                    heading: "Reports",
                    description: "Clients LIS send anonymised patient's data to NirogGyan's API in real time.",
                    arrowPath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "arrow1.svg"
                    ),
                    linePath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "line1.svg"
                    ),
                },
                {
                    imagePath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks",
                        "main-customer.svg"),
                    heading: "Customers",
                    description: "Complete Automation ensures seamless delivery to all customers of clients (the labs)",
                    arrowPath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "arrow2.svg"
                    ),
                    linePath: path.join(
                        process.env.PUBLIC_URL,
                        "howitworks", "line1.svg"
                    ),
                },
            ],
        },

        Video:{
            header:{
                heading: [{ text: "Digital Solutions for Smart Labs & Patients" }],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo."
            },
            videoPanel:{
                title: "Main Video",
                videoLink: "https://www.youtube.com/embed/H0cHIewcQ2M"
            },
        },
    };
})();
