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
        Bytes: {
            content: {
                heading: "NirogGyan Bytes",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur quas repellendus numquam assumenda, mollitia possimus similique sed modi, iure dicta velit, quaerat voluptatibus saepe aliquam in libero est commodi.",
            },
            videoLinks: [
                "https://www.youtube.com/embed/H0cHIewcQ2M",
                "https://www.youtube.com/embed/MlLAXpoxNvQ",
                "https://www.youtube.com/embed/L4aPen8hCL8",
            ],
        },

        Report: {
            contentLeft: {
                header: {
                    heading: "Believe what you see.",
                    description: "Checkout our SmartReports below and know the difference",
                },
                cardsData: [
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-vitamin.png"),
                        name: "Vitamin"
                    },

                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-kidney.png"),
                        name: "Kidney"
                    },
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-electrolyte.png"),
                        name: "Electrolyte"
                    },
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-diabetes.png"),
                        name: "Diabetes"
                    }
                ]
            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "homepage", "report-big-report.png"),
            }
        },
        Achievements: {
            cardsData: [
                {
                    textBig: "40+",
                    textSmall: "Labs Running",
                },
                {
                    textBig: "300,000",
                    textSmall: "Reports Generated",
                },

                {
                    textBig: <>4.7 &#x2B50;</>,
                    textSmall: "Rating from Users",
                },
                {
                    textBig: "04",
                    textSmall: "Countries Reached",
                },
            ]
        },
        ClientMessage: {
            header: {
                heading: "What Our Clients Say",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            backgroundImage: path.join(process.env.PUBLIC_URL, "homepage", "client-message-background.png"),
            cardsData: [
                {
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
                    imagePath: path.join(process.env.PUBLIC_URL, "homepage", "client-message-1.png"),
                    name: "Sanjeev Malhotra",
                    organisation: "Niramaya Pathlab"
                }
                , {
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
                    imagePath: path.join(process.env.PUBLIC_URL, "homepage", "client-message-1.png"),
                    name: "Sanjeev Malhotra",
                    organisation: "Niramaya Pathlab"
                }
            ]

        },
        MailingList: {
            block1: {
                heading: "Subscribe to our mailing list",
                description: "We'll send you updates about NirogGyan",
                footer: ["Get In Touch", ".", "contact@niroggyan.com"],
            },
            block2: {
                placeholderText: "Enter your email address",
            },
            block3: {
                buttonText: "Subscribe",
            },
            contentLeft: {
                heading: "Subscribe to our mailing list",
                description: "We'll send you updates about NirogGyan",
                footer: ["Get In Touch", ".", "contact@niroggyan.com"],
            },
            contentRight: {
                placeholderText: "Enter your email address",
                buttonText: "Subscribe",
            }
        },

    };
})();
