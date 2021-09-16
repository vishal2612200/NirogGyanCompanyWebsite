import * as path from "path";

export default (function () {
    return {
        HeroSection: {
            contentLeft: {

                heading: "FAQS",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "About", link: "/about" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "faqs", "hero-image.png"),
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"

        },
        FrequentQuestions: {
            content: {
                heading: "Frequently Asked Questions",
                description: ""
            },
            cardsList: [
                {
                    heading: "What does NirogGyan offer?",
                    content:
                        "For the 21st century patients, NirogGyan offers diagnostic test reports which are 'SmartReports' - all terms explained in simple language, interesting content, and world-class design. While a normal test report is just an A4 sheet with terms & measurements on it, our SmartReport is comprehensive but concise at the same time. Labs, doctors and patients in the post-pandemic world are all evolving with these informative reports.",
                },
                {
                    heading: "What does NirogGyan offer?",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
                },
                {
                    heading: "What does NirogGyan offer?",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
                },
                {
                    heading: "What does NirogGyan offer?",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
                },
                {
                    heading: "What does NirogGyan offer?",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
                },
                {
                    heading: "What does NirogGyan offer?",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
                },
            ]
        },
        Form: {
            header: {
                heading: "Reach Out with any query",
                description: ""

            }
        }
    };
})();
