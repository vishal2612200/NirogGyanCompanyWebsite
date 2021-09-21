import * as path from "path";

import heroImage from "../about/static/imgs/hero-image.png"

import recognisedBy1 from "../about/static/imgs/recognised-by-1.png"
import recognisedBy2 from "../about/static/imgs/recognised-by-2.png"
import recognisedBy3 from "../about/static/imgs/recognised-by-3.png"

import marketCardItem1 from "../about/static/imgs/market-card-item-1.png"
import marketBackground from "../about/static/imgs/market-background.png"

import believeBackground from "../about/static/imgs/believe-background.png"


import expertTeamShweta from "../about/static/imgs/expertteam-shweta.png"
import expertTeamJoy from "../about/static/imgs/expertteam-joy.png"
import expertTeamKartik from "../about/static/imgs/expertteam-kartik.png"

import productConsultantAyush from "../about/static/imgs/product-consultant-ayush.png"
import productConsultantErik from "../about/static/imgs/product-consultant-erik.png"
import productConsultantKartik from "../about/static/imgs/product-consultant-kartik.png"

import helpedOrganisationsBackground from "../about/static/imgs/helped-organisations-background.png"


export default (function () {
    return {

        HeroSection: {
            contentLeft: {

                heading: "About Us",
                breadcrumbs: [{
                    text: "Home",
                    link: "/home"
                }, {
                    text: "About",
                    link: "/about"
                }],
                backgroundImage: path.join(process.env.PUBLIC_URL, "background-curve.png"),


            },
            contentRight: {
                imagePath: heroImage,
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"


        },
        RecognisedBy: {
            header: {
                heading: [{
                    text: "Recognised By"
                }],

            },
            trustedBrandsLogoImages: [recognisedBy1, recognisedBy2, recognisedBy3],
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
                cardsList: [{
                    imagePath: marketCardItem1,
                    textThin: "5+ Years",
                    textBold: "On the market",
                }],
            },
            contentRight: {
                imagePath: marketBackground
            }
        },

        Believe: {
            contentLeft: {
                content: {

                    heading: "We believe that",

                    description: ["The world & our lives are changing fast",
                        "People have gone ‘Digital’. For good.",
                        "Good Health is easy once Understood"
                    ]
                },
                cardsList: [],
            },
            contentRight: {
                imagePath: believeBackground
            }
        },

        ExpertTeam: {
            header: {

                heading: [{
                    text: "Our Expert Team"
                }],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            cardsList: [{
                imgPath: expertTeamShweta,
                heading: "Shweta Gandhi",
                content: "Co-Founder and CEO",
            },
            {
                imgPath: expertTeamJoy,
                heading: "Joyneel Acharya",
                content: "Product Management",
            },
            {
                imgPath: expertTeamKartik,
                heading: "Kartik Tyagi",
                content: "Technical Head",
            }
            ],
        },

        ProductConsultant: {
            header: {

                heading: [{
                    text: "Product Consultant"
                }],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut velit ac odio euismod facilisis tincidunt eu enim. Suspendisse massa diam, porta eget tristique in, feugiat eu justo.",
            },
            cardsList: [{
                imgPath: productConsultantAyush,
                heading: "Ayush Vora",
                content: "Technology Expert at NirogGyan",
            },
            {
                imgPath: productConsultantErik,
                heading: "Erik Azulay",
                content: "International Strategy",
            },
            {
                imgPath: productConsultantKartik,
                heading: "Kartik Tyagi",
                content: "Technical Head",
            }
            ],
        },
        HelpedOrganisations: {
            header: {
                heading: [{
                    text: "We have helped 100+ organizations"
                }],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar maximus leo, non dignissim risus aliquam eget",
            },
            buttonText: "Discover & Get Support From Our Team",
            backgroundImage: helpedOrganisationsBackground
        },

    };
})();