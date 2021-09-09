import * as path from "path";

export default (function () {
    return {

        HeroSection: {
            info: {
                heading: { line1: "About Us", line2: "" },
                description: "",
            },
            imagePath: path.join(process.env.PUBLIC_URL, "about", "hero-image.png"),
        },
        RecognisedBy: {
            heading: "Recognized By",
            trustedBrandsLogoImages: [
                path.join(process.env.PUBLIC_URL, "about", "recognised-by-1.png"),
                path.join(process.env.PUBLIC_URL, "about", "recognised-by-2.png"),
                path.join(process.env.PUBLIC_URL, "about", "recognised-by-3.png"),
            ],
        },
        Market: {
            contentLeft: {
                header: {
                    heading: "Lorem ipsum dolor sit amet",
                    description: "Good health is complex, till someone explains it simply. We, at NirogGyan, make medical reports so simple, that people feel engaged and health- literate enough to change their lives through these test reports.",
                },
                cardsList: [
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "about", "market-card-item-1.png"),
                        textThin: "5+ Years",
                        textBold: "On the market",
                    }
                ],
            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "about", "market-background.png")
            }
        },

        Believe: {
            contentLeft: {
                header: {
                    heading: "We believe that",
                    description: ["The world & our lives are changing fast",
                        "People have gone ‘Digital’. For good.",
                        "Good Health is easy once Understood"]
                },
                cardsList: [],
            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "about", "believe-background.png")
            }
        },

        ExpertTeam: {
            content: {
                heading: "Our Expert Team",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            cardsList: [
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "expertteam-shweta.png"
                    ),
                    heading: "Shweta Gandhi",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,",
                },
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "expertteam-joy.png"
                    ),
                    heading: "Joyneel Acharya",
                    content: "Buy  your medicines with our mobile application with a simple delivery system",
                },
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "expertteam-kartik.png"
                    ),
                    heading: "Kartik Tyagi",
                    content: "Free consultation with our trusted doctors and get the best recomendations",
                }
            ],
        },

        ProductConsultant: {
            content: {
                heading: "Product Consultant",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            cardsList: [
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "product-consultant-ayush.png"
                    ),
                    heading: "Ayush Vora",
                    content: "Technology Expert at NirogGyan",
                },
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "product-consultant-erik.png"
                    ),
                    heading: "Erik Azulay",
                    content: "Serial Entrepreneur, International Strategy",
                },
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "product-consultant-kartik.png"
                    ),
                    heading: "Kartik Tyagi",
                    content: "Technical Head",
                }
            ],
        },
        HelpedOrganisations: {
            content: {
                heading: "We have helped 100+ organizations",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar maximus leo, non dignissim risus aliquam eget",
            },
            buttonText: "Discover & Get Support From Our Team"
            ,
            backgroundImage: path.join(process.env.PUBLIC_URL, "about", "helped-organisations-background.png"),
        },

        Report: {
            contentLeft: {
                header: {
                    heading: "Believe what you see.",
                    description: "Checkout our SmartReports below and know the difference",
                },
                cardsList: [
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "about", "report-vitamin.png"),
                        name: "Vitamin"
                    },

                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "about", "report-kidney.png"),
                        name: "Kidney"
                    },
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "about", "report-electrolyte.png"),
                        name: "Electrolyte"
                    },
                    {
                        imagePath: path.join(process.env.PUBLIC_URL, "about", "report-diabetes.png"),
                        name: "Diabetes"
                    }
                ]
            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "about", "report-big-report.png"),
            }
        },
        Achievements: {
            cardsList: [
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
            backgroundImage: path.join(process.env.PUBLIC_URL, "about", "client-message-background.png"),
            cardsList: [
                {
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
                    imagePath: path.join(process.env.PUBLIC_URL, "about", "client-message-1.png"),
                    name: "Sanjeev Malhotra",
                    organisation: "Niramaya Pathlab"
                }
                , {
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus lectus eget ex malesuada, et viverra ex ultrices. Aliquam quis sodales massa, ac pellentesque est. Integer malesuada lobortis tellus, a venenatis tellus sagittis sit amet.",
                    imagePath: path.join(process.env.PUBLIC_URL, "about", "client-message-1.png"),
                    name: "Sanjeev Malhotra",
                    organisation: "Niramaya Pathlab"
                }
            ]

        },
        GetInTouch: {

            block1: {
                imagePath: path.join(process.env.PUBLIC_URL, "about", "get-in-touch-1.png"),

            },
            block2: {
                line1: "Get In Touch",
                line2: "contact@niroggyan.com",
                line3: "+91-7678277891",
            },
            block3: {
                imagePath: path.join(process.env.PUBLIC_URL, "about", "get-in-touch-2.png"),
            }
        },

    };
})();
