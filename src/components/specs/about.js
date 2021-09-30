
import * as path from "path";

import heroImage from "../about/static/imgs/hero-image.svg"

import recognisedBy1 from "../about/static/imgs/recognised-by-1.png"
import recognisedBy2 from "../about/static/imgs/recognised-by-2.png"
import recognisedBy3 from "../about/static/imgs/recognised-by-3.png"

import marketCardItem1 from "../about/static/imgs/market-card-item-1.png"
import marketBackground from "../about/static/imgs/market-background.svg"

import believeBackground from "../about/static/imgs/believe-background.svg"


import expertTeamShweta from "../about/static/imgs/expertteam-shweta.svg"
import expertTeamJoy from "../about/static/imgs/expertteam-joy.svg"
import expertTeamKartik from "../about/static/imgs/expertteam-kartik.svg"

import productConsultantAyush from "../about/static/imgs/product-consultant-ayush.png"
import productConsultantErik from "../about/static/imgs/product-consultant-erik.svg"
import productConsultantKartik from "../about/static/imgs/expertteam-kartik.svg"

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
                    heading: [{ text: "As the first point-of-evidence.Diagnostic data is the most effective tool to tell the status of a person's health and compel them to be proactive." }],
                    description: [
                        { text: "Yet, they are extremely difficult to interpret by anyone who is not a doctor, leading to low health literacy and ineffective long-term measures." },
                        { text: "Born out of a need almost everyone over the age of 30 has faced at least once in their lives, NirogGyan emerged as an innovative startup in a space which needed evolution for a long time. We keep it simple with our easy-to-understand medical test reports." }
                    ]
                },
                cardsList: [{
                    imagePath: marketCardItem1,
                    items: ["📈 3+ Years in Market", "📦 10+ Products", "📝 300,000+ Reports"],
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

                    description: ["🏥 To truly engage with patients, one has to understand what they are worried about and what they are trying to do",
                        "🏥 Consumer health technologies have the potential to strengthen the patient-physician connection and improve health outcomes",
                        "🏥 Good Health is easy once clearly understood and imbibed into everyday lives"
                    ]
                }
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

    }
})();