
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
                image: {imagePath:heroImage, altText:"hero"},
            },
            linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"


        },
        RecognisedBy: {
            header: {
                heading: [{
                    text: "Recognised By"
                }],

            },

            trustedBrandsLogoImages: [
                { imagePath: recognisedBy1, altText: "recognisedBy1" },
                { imagePath: recognisedBy2, altText: "recognisedBy2" },
                { imagePath: recognisedBy3, altText: "recognisedBy3" },
            ],
        },
        Market: {
            contentLeft: {
                header: {
                    heading: [{ text: "As the first point-of-evidence, Diagnostic data is the most effective tool to tell the status of a person's health and compel them to be proactive." }],
                    description: [
                        { text: "Yet, they are extremely difficult to interpret by anyone who is not a doctor, leading to low health literacy and ineffective long-term measures." },
                        { text: "Born out of a need almost everyone over the age of 30 has faced at least once in their lives, NirogGyan emerged as an innovative startup in a space which needed evolution for a long time. We keep it simple with our easy-to-understand medical test reports." }
                    ]
                },
                cardsList: [{
<<<<<<< HEAD
                    image: { imagePath: marketCardItem1, altText: "marketCardItem1" },
                    items: ["📈 3+ Years in Market", "📦 10+ Products", "📝 300,000+ Reports"],
                }],
=======
                    imagePath: marketCardItem1,
                    items: ["📈 3+ Years in Market", "📦 10+ Products", "📝 Founders from IIM - BITS backgrounds"],
           }],
>>>>>>> e6577c4d385bce7ec7a8c0054dfb62d43a33e16b
            },
            contentRight: {
                image: { imagePath: marketBackground, altText: "marketBackground" },
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
                image: { imagePath: believeBackground, altText: "believeBackground" },
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
                image: { imagePath: expertTeamShweta, altText: "expertTeamShweta" },

                heading: "Shweta Gandhi",
                content: "Co-Founder, Business Head",
                linkedin: "https://www.linkedin.com/in/shweta-gandhi/"
            },
            {
                image: { imagePath: expertTeamJoy, altText: "expertTeamJoy" },

                heading: "Joyneel Acharya",
                content: "Co-Founder, Product Head",
                linkedin: "https://www.linkedin.com/in/joyneel-acharya/"
            },
            {
                image: { imagePath: expertTeamKartik, altText: "expertTeamKartik" },

                heading: "Kartik Tyagi",
                content: "Technical Lead",
                linkedin: "https://www.linkedin.com/in/kartiktyagi3/"
            },
            {
                imgPath: expertTeamKartik,
                heading: "Ranjeet Jha",
                content: "Head of Design",
                linkedin: ""
            },
            {
                imgPath: expertTeamKartik,
                heading: "Vishal Sharma",
                content: "Software Engineer",
                linkedin: "https://www.linkedin.com/in/vishal-sharma-gbpecdelhi/"
            },
            {
                imgPath: expertTeamKartik,
                heading: "Abhishek Soni",
                content: "Software Engineer",
                linkedin: "https://www.linkedin.com/in/hello-abhishek/"
            },
            {
                imgPath: expertTeamKartik,
                heading: "Nithish",
                content: "Software Engineer",
                linkedin: ""
            },
            {
                imgPath: expertTeamKartik,
                heading: "Yash Marmat",
                content: "Web Developer",
                linkedin: "https://www.linkedin.com/in/yash-marmat/"
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
                image: { imagePath: productConsultantAyush, altText: "productConsultantAyush" },

                heading: "Ayush Vora",
                content: "Technology Expert at NirogGyan",
            },
            {
                image: { imagePath: productConsultantErik, altText: "productConsultantErik" },

                heading: "Erik Azulay",
                content: "International Strategy",
            },
            {
                image: { imagePath: productConsultantKartik, altText: "productConsultantKartik" },

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
                description: "Labs, hospitals, startups and corporates have tried our Patient-Engagement solutions (with Smart Reports, specialised profiles, dashboards and analytics). Why don't you join the list as well?",
            },
            buttonText: "Discover & Get Support From Our Team",
            backgroundImage: helpedOrganisationsBackground
        },

    }
})();