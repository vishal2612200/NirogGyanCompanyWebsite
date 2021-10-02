
import * as path from "path";

import heroImage from "../about/static/imgs/hero-image.png"

import recognisedBy1 from "../about/static/imgs/recognised-by-1.png"
import recognisedBy2 from "../about/static/imgs/recognised-by-2.png"
import recognisedBy3 from "../about/static/imgs/recognised-by-3.png"
import recognisedBy4 from "../about/static/imgs/recognised-by-4.jpg"

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
            trustedBrandsLogoImages: {
                recognisedBy1: [recognisedBy1, "https://yourstory.com/2021/07/funding-saas-startup-niroggyan-seed-round-healthcare/amp"],
                recognisedBy2: [recognisedBy2, "https://saasindustry.com/news/niroggyan-raises-an-undisclosed-seed-round-from-healthcare-industry-veterans/"],
                recognisedBy3: [recognisedBy3, "https://entrackr.com/2021/07/funding-in-indian-startups-this-week-12-july-17-july/"],
                recognisedBy4: [recognisedBy4, "https://www.biospectrumindia.com/news/20/15236/nha-nathealth-hosts-innovation-carnival-for-healthcare-startups.html"],
            }
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
                    imagePath: marketCardItem1,
                    items: ["📈 3+ Years in Market", "📦 10+ Products", "📝 Founders from IIM - BITS backgrounds"],
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
                content: "Co-Founder, Business Head",
                linkedin: "https://www.linkedin.com/in/shweta-gandhi/"
            },
            {
                imgPath: expertTeamJoy,
                heading: "Joyneel Acharya",
                content: "Co-Founder, Product Head",
                linkedin: "https://www.linkedin.com/in/joyneel-acharya/"
            },
            {
                imgPath: expertTeamKartik,
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
                linkedin: "https://www.linkedin.com/in/nithish-976b76218/"
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
            cardsList: [
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Teji HS",
                    content: "Global Head in Oracle, Singapore national & works with Healthtech startups",
                    linkedin: "https://www.linkedin.com/in/teji-hs-9765143/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Arindam Haldar",
                    content: "Ex-CEO of SRL & Thyrocare, and IIM-C alum",
                    linkedin: "https://www.linkedin.com/in/arindamhaldar/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Ruchira Roy",
                    content: "Managing Partner, Positron and IIM-A alum",
                    linkedin: "https://www.linkedin.com/in/ruchira-roy-a155855/"
                },
                
                {
                    imgPath: productConsultantKartik,
                    heading: "PIEDS, BITS Pilani",
                    content: "Incubator of BITS Pilani",
                    linkedin: "https://www.linkedin.com/company/pilani-innovation-entrepreneurship-development-society-pieds-bits-pilani/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Gaurav Rautela",
                    content: "Senior Tech Lead at Gojek",
                    linkedin: "https://www.linkedin.com/in/gaurav-rautela-5b0223b9/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Sumit Bagaria",
                    content: "CEO, Hemogenomics & IIM-C alum",
                    linkedin: "https://www.linkedin.com/in/sumit-bagaria-8170a81/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Rakesh Luthra",
                    content: "Director at Novo Nordisk",
                    linkedin: "https://www.linkedin.com/in/rakeshluthra1984/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Vish Sathappan",
                    content: "Director at Times of India Group",
                    linkedin: "https://www.linkedin.com/in/vish-sathappan-8b170b13/"
                },
                {
                    imgPath: productConsultantKartik,
                    heading: "Mr. Sanjeev Kathpalia",
                    content: "IIM-C alum in healthcare",
                    linkedin: "https://www.linkedin.com/in/sanjeevkathpalia/"
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