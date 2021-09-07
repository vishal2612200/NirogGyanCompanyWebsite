import * as path from "path";

export default (function () {
    return {

        HeroSection: {
            info: {
                heading: { line1: "About Us", line2: "" },
                description: "",
                buttons: { services: "our Services", watchVideo: "Watch Video" },
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
