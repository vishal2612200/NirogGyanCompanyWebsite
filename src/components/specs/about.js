import * as path from "path";

export default (function () {
    return {

        HeroSection: {
            contentLeft: {

                heading: "About Us",
                breadcrumbs: [{ text: "Home", link: "/home" }, { text: "About", link: "/about" }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                imagePath: path.join(process.env.PUBLIC_URL, "about", "hero-image.png"),
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"


        },
        RecognisedBy: {
            content: {
                heading: "Recognised By",
                description: ""

            },
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
                    description: {
                        paragraph1: "Good health is complex, till someone explains it simply.",
                        paragraph2: "We, at NirogGyan, make medical reports so simple, that people feel engaged and health- literate enough to change their lives through these test reports."
                    },
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
                content: {
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
                        "Co-Founder and CEO",
                },
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "expertteam-joy.png"
                    ),
                    heading: "Joyneel Acharya",
                    content: "Product Management",
                },
                {
                    imgPath: path.join(
                        process.env.PUBLIC_URL,
                        "about", "expertteam-kartik.png"
                    ),
                    heading: "Kartik Tyagi",
                    content: "Technical Head",
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
                    content: "International Strategy",
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
            buttonText: "Discover & Get Support From Our Team",
            backgroundImage: path.join(process.env.PUBLIC_URL, "about", "helped-organisations-background.png"),
        },

    };
})();
