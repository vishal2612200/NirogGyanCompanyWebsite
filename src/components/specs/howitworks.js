import * as path from "path";

export default (function () {
    return {
        HeroSection: {
            contentLeft: {

                heading: "How it Works",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "About", link: "/about" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {

                imagePath: path.join(process.env.PUBLIC_URL, "howitworks", "hero-image.png"),
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
        },

        Report: {
            header: {
                heading: "One idea, branched into multiple avatars",
                description: "Every human being is at a different stage of ‘health’. Our SmartReports come in various forms, for the best impact on your diagnostics business.",
            },
            imagePanel: {
                digital: {
                    buttonText: "Digital Smart Report",
                    images: [path.join(process.env.PUBLIC_URL, "howitworks", "howitworks-report-digital.png")]
                },
                pdf: {
                    buttonText: "PDF Smart Report",
                    images: [path.join(process.env.PUBLIC_URL, "howitworks", "howitworks-report-pdf.png"),
                    path.join(process.env.PUBLIC_URL, "howitworks", "howitworks-report-pdf.png"),
                    path.join(process.env.PUBLIC_URL, "howitworks", "howitworks-report-pdf.png")]
                },

            }
        },

        Features: {
            contentLeft: {
                header: {
                    line1: ["Health Knowledge", "   +   ", "Modern Design"],
                    line2: "combine to give you the most",
                    line3: "Understandable Medical Reports",
                },
                cardsData: [
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "features-item-1.png"),
                        textThin: "Software covering 250+",
                        textBold: "Pathology Biomarkers",
                    },
                    {
                        imagePath: path.join(
                            process.env.PUBLIC_URL,
                            "homepage", "features-item-2.png"
                        ),
                        textThin: "Knowledge Bank based by",
                        textBold: "Evidence-backed, Vetted Content",
                    },
                    {
                        imagePath: path.join(
                            process.env.PUBLIC_URL,
                            "homepage",
                            "features-item-3.png"
                        ),
                        textThin: "Add-ons : Multi - language",
                        textBold: "Content, Graphs, Analytics",
                    },
                ],
            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "homepage", "features-big.png")
            }
        },
    };
})();
