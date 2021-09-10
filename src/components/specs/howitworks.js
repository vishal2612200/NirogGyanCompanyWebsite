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

        Report: {
            block1: {
                heading: "One idea, branched into multiple avatars",
                description: "Every human being is at a different stage of ‘health’. Our SmartReports come in various forms, for the best impact on your diagnostics business.",
                footer: ["Get In Touch", ".", "contact@niroggyan.com"],
            },
            block2: {
                buttonDigitalReport: { text: "Digital Smart Report", link: "#" },
                buttonPDFReport: { text: "PDF Smart Report", link: "#" },

            },
            block3: {
                buttonText: "Subscribe",
            }
        },

    };
})();
